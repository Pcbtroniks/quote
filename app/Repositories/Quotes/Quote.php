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

    public static function get(){
        $quote =  ModelsQuote::with(['user','coupon', 'listed_activity'])->paginate(5);

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

        $quote->activity = Activity::findOrFail($quote->listed_activity->activity_id) ?? '';
        $quote->hotel = DB::table('hotels')->where( 'id', $quote->listed_activity->hotel_id)->first('name') ?? '';
        return $quote;
    }

    public function save(Request $request){

        $coupon = $this->make_coupon($request);

        $data = $this->parse_quote($request, $coupon->id);

        $quote = ModelsQuote::create( $data );

        if($request->tipoReservacion == 'entrada'){

            $activities = $this->add_park($quote->id, $data['activity_id']);
            
        }else if($request->tipoReservacion == 'tour'){
            
            $activities = $this->add_tour($quote->id, $request->parque['activity'], $request->parque['hotel'], $request->parque['pickup'] );
            
        } else {
            
            $activities = $this->add_combo($quote->id, $request->parque);
        
        }


        $quote->url = route('quote.preview', ['quoteId' => $quote->uuid]);
        return $quote;
    }

    public function parse_quote(Request $request, $coupon){
        return [
            'user_id' => auth()->user()->id,
            'activity_id' => $request->parque,
            'coupon_id' => $coupon,
            'uuid' => Str::uuid()->toString(),
            'season' => $request->season,
            'national' => $request->nacionales,
            'quote_type' => $request->tipoReservacion,
            'activity_date' => $request->fechaActividad,
            'holder_name' => $request->nombreTitular,
            'adults' => $request->adultos,
            'minors' => $request->menores,
            'infants' => $request->infantes,
            'notes' => $request->notas ?? '',
            'status' => 'created',

        ];
    }
    
    public function add_combo($quote, $activities) {

        foreach ($activities as $activity) {

            $this->add_activity($quote, $activity['activity'], $activity['hotel'], $activity['pickup']);
        
        }


    }

    public function add_park($quote, $activity) {

        return $this->add_activity($quote, $activity, null, null);

    }

    public function add_tour($quote, $activity, $hotel, $pickup_time) {

        return $this->add_activity($quote, $activity, $hotel, $pickup_time);

    }

    public function add_activity($quote_id , $activity_id, $hotel_id, $pickup_time){

        return QuoteActivity::create([
            'quote_id' => $quote_id,
            'activity_id' => $activity_id,
            'hotel_id' => $hotel_id,
            'pickup_time' => $pickup_time,
        ]);

    }

    public function make_coupon(Request $request){

        $coupon = Coupon::create([
            'code' => '',
            'public_price' => $request->precioPublico,
            'agency_price' => $request->importeVenta,
            'paid_status' => 'none',
        ]);

        
        Coupon::where('id', $coupon->id)
                ->update(['code' => 'TIM' . str_pad( $coupon->id , 5, '0', STR_PAD_LEFT)]);

        return $coupon;

    }

}