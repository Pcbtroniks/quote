<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Mail;
use App\Repositories\Prices\Price;
use App\Repositories\Quotes\Quote;
use App\Http\Requests\Quote\StoreQuoteRequest;
use App\Repositories\Zones\Hotel;
use App\Repositories\Zones\Zone;
use Illuminate\Http\Request;
use App\Mail\QuoteCreated;
use Illuminate\Support\Facades\DB;

class QuoteController extends Controller
{
    
    public function index(Quote $quote, Zone $zone){

        $parks = $quote->getParks();
        $zones = $zone->all();

        return inertia('Quotes/Index', compact('parks','zones'));
    
    }

    public function parks(Quote $quote){

        return response()->json($quote->getParks());
    
    }

    public function tours(Quote $quote){

        return response()->json($quote->getTours());
    
    }

    public function hotels(Hotel $hotels, $zone){

        return response()->json($hotels->getByZoneSorted($zone));
    
    }

    public function pickups($zone, $activity){
        return response()->json($this->getPickupsByZoneAndActivity($zone, $activity));
    
    }

    public function price($activity, $zone, $season){
        if($zone == 2) $zone = 1;
        return response()->json(Price::get($activity, $zone, $season));
    
    }

    public function store(StoreQuoteRequest $request, Quote $quote){
        $quote = $quote->save($request);

        // Mail::to('freetraveler@freetraveler.com.mx')->send(new QuoteCreated($quote));
        
        return redirect()->route('quote');

    }

    public function preview(Quote $quoteData, $uuid){

        $quote = $quoteData->preview($uuid);

        return inertia('Quotes/Preview/Index', compact('quote'));
    }


    public function updateListedActivities(Request $request, Quote $quote)
    {
        $quote->updateListedActivities($request->quote_activity_id, $request->pickup_time);
        return response()->json(['status' => 'ok', 'message' => 'Listed activities updated successfully.']);
    }

    public function getPickupsByZoneAndActivity($zone, $activity)
    {
        $pickups = DB::table('pickups as p')
            ->where('p.zone_id', $zone)
            ->where('p.activity_id', $activity)
            ->join('zones as z', 'p.zone_id', '=', 'z.id')
            ->join('activities as a', 'p.activity_id', '=', 'a.id')
            ->join('hotels as h', 'p.hotel_id', '=', 'h.id')
            ->get(['p.id', 'p.hotel_id', 'a.name as activity', 'z.name as zone','p.pickup_time', 'p.activity_id', 'p.zone_id']);

        return $pickups;
    }

    // Returns hotels with pickups for a given activity and zone
    public function getHotelsByActivityAndZone($zone, $activity)
    {
        $hotels = DB::table('pickups as p')
            ->join('zones as z', 'p.zone_id', '=', 'z.id')
            ->join('activities as a', 'p.activity_id', '=', 'a.id')
            ->join('hotels as h', 'p.hotel_id', '=', 'h.id')
            ->where('p.zone_id', $zone)
            ->where('p.activity_id', $activity)
            ->select(
                'h.id as id',
                'h.name as name',
                'z.name as zone',
                DB::raw('COUNT(p.id) as total_pickups')
            )
            ->groupBy('h.id', 'h.name', 'z.name')
            ->orderBy('h.name')
            ->get();

        return response()->json($hotels);
    }

}
