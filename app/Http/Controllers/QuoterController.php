<?php

namespace App\Http\Controllers;

use App\Repositories\Quotes\Quote;
use App\Repositories\Zones\Zone;
use Illuminate\Http\Request;

class QuoterController extends Controller
{
    

    
    public function index(Quote $quote, Zone $zone){

        $parks = $quote->getParks();
        $zones = $zone->all();

        return inertia('Quoter/Index', compact('parks','zones'));
     
    }

    public function store() {
     
        dd(request());
     
    }

}
