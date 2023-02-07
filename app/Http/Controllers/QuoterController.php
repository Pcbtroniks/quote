<?php

namespace App\Http\Controllers;

use App\Http\Requests\Quote\StoreQuoteRequest;
use App\Http\Requests\Cost\CaculateCostRequest;
use App\Services\Cost\MultipleDiscount;
use App\Services\Cost\CalculateCost;
use App\Repositories\Quotes\Quoter;
use App\Repositories\Quotes\Quote;
use App\Services\Cost\PublicPrice;
use App\Repositories\Zones\Zone;
use Illuminate\Http\Request;
use App\Models\Activity;

class QuoterController extends Controller
{
    public function create(Quote $quote, Zone $zone){

        $parks = $quote->getParks();
        $zones = $zone->all();

        return inertia('Quoter/CreateQuote', compact('parks','zones'));
     
    }

    public function ndDeprecated()
    {
        $act_id = request()->activity;
        $adults = request()->adults;
        $minors = request()->minors;
        $season = request()->season;
        $zone = request()->zone ?? 1;
        $activity = Activity::find($act_id);
        $price = new PublicPrice($activity, $adults, $minors, $season, $zone);
        dd((new MultipleDiscount($price))->getDescription());
    }

    public function calculateCost(CaculateCostRequest $request)
    {
        $price = new CalculateCost($request);
        $response = $price->applyDiscount();
        
        return response()->json([
            'description' => $response->getDescription(),
            'cost' => $response->getCost(),
            'request' => request()->all(),
        ]);
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
