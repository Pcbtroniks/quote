<?php

namespace App\Repositories\Quotes;

use App\Enums\CouponPaidStatus;
use App\Enums\Discount;
use App\Models\Activity;
use App\Models\Coupon;
use Illuminate\Http\Request;

use App\Models\Quote as ModelsQuote;
use App\Models\Quote\Entrance;
use App\Models\Quote\QuoteAdapter;
use App\Models\QuoteActivity;
use App\Services\Cost\CalculateCost;
use Illuminate\Support\Facades\DB;

class Quoter {

    public static function get(int $limit = 10){
        $quote = ModelsQuote::with(['user','coupon', 'listed_activity'])->paginate($limit);
        return $quote;
    }

    public static function getWithActivities(int $limit = 10){
        $quote =  ModelsQuote::with(['user','coupon', 'listed_activities','listed_activities.activity'])->paginate($limit);
        return $quote;
    }

    public static function getOperationDashboard(int $limit = 10){

        return ModelsQuote::with(['user', 'coupon', 'listed_activities', 'listed_activities.activity', 'team', 'listed_activities.hotel', 'listed_activities.hotel.zone'])->paginate($limit);

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

        $data = QuoteAdapter::parse($request);

        if(Discount::is(Discount::Entrance, $request->tipoReservacion)){

            $cost_amount = new CalculateCost(QuoteAdapter::parseCosts($request));
            $data['cost_amount'] = $cost_amount->applyDiscount()->getCost();
    
            $quote = ModelsQuote::create( $data );

            Entrance::addActivity($quote->id, $request->actividad, $request->fechaActividad);
            
        }else if(Discount::is(Discount::Tour, $request->tipoReservacion)){
            $activity = (object) $request->actividad[0];
            $cost_amount = new CalculateCost($activity);
            $data['cost_amount'] = $cost_amount->applyDiscount()->getCost();
    
            $quote = ModelsQuote::create( $data );
            
            $this->add_tour($quote->id, $data['activity_id'][0]['activity'], $data['activity_id'][0]['hotel'], $data['activity_id'][0]['pickup'], $data['activity_id'][0]['activity_date'] );
            
        } else {
            $discountType = count($request->actividad) <= 2 ? 'pack_double' : 'pack_multiple';
            $data['cost_amount'] = 0;
            // need set discount type for each activity
            // and set Adults and minors
            foreach ($request->actividad as $activity) {
                $activity = (object) $activity;
                $activity->type = $discountType;
                $activity->adults = $request->adultos;
                $activity->minors = $request->menores;
                $cost_amount = new CalculateCost($activity);
                $data['cost_amount'] += $cost_amount->applyDiscount()->getCost();
            }
    
            $quote = ModelsQuote::create( $data );
            
            $this->add_package($quote->id, $request->actividad);
        
        }


        $quote->url = route('quote.preview', ['quoteId' => $quote->uuid]);

        return $quote;
    }
    
    public function add_package($quote, $activities) {

        foreach ($activities as $activity) {

            $this->add_activity($quote, $activity['activity'], $activity['hotel'], $activity['pickup'], $activity['activity_date']);
        
        }


    }

    public function saveEntrance($quote, $activity, $date) {

        return $this->add_activity($quote, $activity, null, null, $date);

    }

    public function add_tour($quote, $activity, $hotel, $pickup_time, $date) {

        return $this->add_activity($quote, $activity, $hotel, $pickup_time, $date);

    }

    public function add_activity($quote_id , $activity_id, $hotel_id, $pickup_time, $date){

        return QuoteActivity::create([
            'quote_id' => $quote_id,
            'activity_id' => $activity_id,
            'hotel_id' => $hotel_id,
            'pickup_time' => $pickup_time ?? '00:00:00',
            'date' => $date,
        ]);

    }

    public function make_coupon(Request $request){

        $coupon = Coupon::create([
            'code' => null,
            'public_price' => $request->precioPublico,
            'sale_amount' => $request->importeVenta,
            'sale_percentage' => 5, 
            'sale_amount_paid' => 0.00, 
            'paid_status' => CouponPaidStatus::None,
        ]);

        // CouponsCoupon::setCode($coupon->id);

        return $coupon;

    }

    public function Operations()
    {
        return ModelsQuote::with(['user', 'coupon', 'listed_activities', 'listed_activities.activity', 'team', 'listed_activities.hotel', 'listed_activities.hotel.zone']);
    }

    public static function getOperationsByAgency(int $limit = 10){
        return ModelsQuote::with(['user', 'coupon', 'listed_activities', 'listed_activities.activity', 'team', 'listed_activities.hotel', 'listed_activities.hotel.zone'])->where('team_id', auth()->user()->currentTeam->id)->paginate($limit);
    }

    public function getFiltered(Request $request, int $limit = 15)
    {
        return ModelsQuote::when($request->date, function ($q) use ($request){
                                        $q->whereHas('listed_activities', function ($q) use($request) {
                                            $q->where('date', $request->date);
                                        });
                                    })->
                                    when($request->type, function ($q) use ($request){
                                        $q->where('type', $request->type);
                                    })->
                                    when($request->filter_agency, function ($q) use ($request){
                                            $q->where('team_id', $request->filter_agency);
                                    })->
                                    when($request->zone, function ($q) use ($request){
                                        $q->whereHas('listed_activities.hotel.zone', function ($q) use($request) {
                                            $q->whereId($request->zone);
                                        });
                                    })->
                                    with([
                                    'user', 
                                    'coupon', 
                                    'listed_activities', 
                                    'listed_activities.activity', 
                                    'team', 
                                    'listed_activities.hotel', 
                                    'listed_activities.hotel.zone'])
                                    ->paginate($limit);
    }

}