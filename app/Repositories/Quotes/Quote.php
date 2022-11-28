<?php

namespace App\Repositories\Quotes;

use App\Models\Activity;
use App\Models\Coupon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

use App\Models\Quote as ModelsQuote;
use App\Models\QuoteActivity;
use Illuminate\Support\Facades\DB;

class Quote {

    public static function get(int $limit = 5){
        $quote =  ModelsQuote::with(['user','coupon', 'listed_activity'])->paginate($limit);
        return $quote;
    }

    public static function getWithActivities(int $limit = 5){
        $quote =  ModelsQuote::with(['user','coupon', 'listed_activities','listed_activities.activity'])->paginate($limit);
        return $quote;
    }

    public function getParks(){

        return Activity::where('type', 'park')->get();
    
    }

    public function getTours(){

        return Activity::where('type', 'tour')->get();
    
    }

    public function preview($uuid){

        $quote =  ModelsQuote::where('uuid', $uuid)
                            ->with(['user','coupon', 'listed_activity'])
                            ->firstOrFail();

        $quote->load('listed_activities');
        $quote->listed_activities->load('activity');
        $quote->listed_activities->load('hotel');

        $quote->activity = Activity::findOrFail($quote->listed_activity->activity_id) ?? '';
        $quote->hotel = DB::table('hotels')->where( 'id', $quote->listed_activity->hotel_id)->first('name') ?? '';
        return $quote;
    }

    public function save(Request $request){

        $coupon = $this->make_coupon($request);

        $data = $this->parse_quote($request, $coupon->id);

        $quote = ModelsQuote::create( $data );

        if($request->tipoReservacion == 'entrada'){

            $activities = $this->add_park($quote->id, $data['activity_id'], $data['date']);
            
        }else if($request->tipoReservacion == 'tour'){
            
            $activities = $this->add_tour($quote->id, $request->actividad['activity'], $request->actividad['hotel'], $request->actividad['pickup'],  $request->fechaActividad );
            
        } else {
            
            $activities = $this->add_package($quote->id, $request->actividad);
        
        }


        $quote->url = route('quote.preview', ['quoteId' => $quote->uuid]);
        return $quote;
    }

    public function parse_quote(Request $request, $coupon){
        return [
            'coupon_id' => $coupon,
            'user_id' => auth()->user()->id,
            'activity_id' => $request->actividad,
            'date' => $request->fechaActividad,
            'uuid' => Str::uuid()->toString(),
            'season' => $request->season,
            'national' => $request->nacionales,
            'type' => $request->tipoReservacion,
            'holder_name' => $request->nombreTitular,
            'adults' => $request->adultos,
            'minors' => $request->menores,
            'infants' => $request->infantes,
            'observations' => $request->notas ?? '',
            'team_id' => auth()->user()->currentTeam->id,
        ];
    }
    
    public function add_package($quote, $activities) {

        foreach ($activities as $activity) {

            $this->add_activity($quote, $activity['activity'], $activity['hotel'], $activity['pickup'], $activity['activity_date']);
        
        }


    }

    public function add_park($quote, $activity, $date) {

        return $this->add_activity($quote, $activity, null, null, $date);

    }

    public function add_tour($quote, $activity, $hotel, $pickup_time, $date) {

        return $this->add_activity($quote, $activity, $hotel, $pickup_time, $date);

    }

    public function add_activity($quote_id , $activity_id, $hotel_id, $pickup_time, $date){

        return QuoteActivity::create([
            'quote_id' => $quote_id,
            'activity_id' => $activity_id,
            'date' => $date,
            'hotel_id' => $hotel_id,
            'pickup_time' => $pickup_time ?? '00:00:00',
        ]);

    }

    public function make_coupon(Request $request){

        $coupon = Coupon::create([
            'code' => '',
            'public_price' => $request->precioPublico,
            'sale_amount' => $request->importeVenta,
            'sale_percentage' => 5, 
            'sale_amount_paid' => 0.00, 
            'paid_status' => 'none',
        ]);

        
        Coupon::where('id', $coupon->id)
                ->update(['code' => 'TIM' . str_pad( $coupon->id , 5, '0', STR_PAD_LEFT)]);

        return $coupon;

    }

}