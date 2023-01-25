<?php

namespace App\Http\Controllers;

use App\Http\Requests\Quote\StoreQuoteRequest;
use App\Services\Cost\EntranceDiscount;
use App\Services\Cost\TourDiscount;
use App\Repositories\Quotes\Quoter;
use App\Repositories\Quotes\Quote;
use App\Services\Cost\PublicPrice;
use App\Repositories\Zones\Zone;
use Illuminate\Http\Request;
use App\Models\Activity;
use App\Services\Cost\DoubleDiscount;
use App\Services\Cost\MultipleDiscount;

class QuoterController extends Controller
{
    public function create(Quote $quote, Zone $zone){

        $parks = $quote->getParks();
        $zones = $zone->all();

        return inertia('Quoter/CreateQuote', compact('parks','zones'));
     
    }

    public function nd($act_id, $adults, $minors, $season)
    {
        $activity = Activity::find($act_id);
        $price = new PublicPrice($activity, $adults, $minors, $season, $zone = 1);
        dd((new MultipleDiscount($price))->getDescription());
    }

    public function store(StoreQuoteRequest $request)
    {
        (new Quoter)->save($request);

        return response()->json($request->actividad);
    }

    public function handleActivity(Request $request)
    {
        return $request->activities;
    }

}
