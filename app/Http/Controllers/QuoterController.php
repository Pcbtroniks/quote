<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Repositories\Quotes\Quote;
use App\Repositories\Zones\Zone;
use Illuminate\Http\Request;

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

        dd($activity->discounts);
    }

    public function store() {
     
        dd(request());
     
    }

}
