<?php

namespace App\Http\Controllers;

use App\Enums\QuoteType;
use App\Http\Requests\Quote\StoreQuoteRequest;
use App\Repositories\Quotes\Quote;
use App\Repositories\Zones\Zone;
use Illuminate\Http\Request;
use App\Models\Activity;
use App\Repositories\Quotes\Quoter;

class QuoterController extends Controller
{
    

    
    public function create(Quote $quote, Zone $zone){

        $parks = $quote->getParks();
        $zones = $zone->all();

        return inertia('Quoter/CreateQuote', compact('parks','zones'));
     
    }

    public function nd($act_id)
    {
        $activity = Activity::find($act_id);

        dd($activity->filter_prices);
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
