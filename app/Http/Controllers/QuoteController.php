<?php

namespace App\Http\Controllers;

use App\Http\Requests\Quote\Save;
use App\Models\Activity;
use App\Repositories\Prices\Price;
use App\Repositories\Quotes\Quote;
use App\Repositories\Zones\Hotel;
use App\Repositories\Zones\Zone;
use Illuminate\Http\Request;

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

        return response()->json($hotels->getByZone($zone));
    
    }

    public function price($activity, $zone, $season){

        return response()->json(Price::get($activity, $zone, $season));
    
    }

    public function store(Save $request, Quote $quote){

        $quote->save($request);
        
        return to_route('quote')
                ->with('message' , 'Cotización realizada con exito');


    }

    public function preview(Quote $quoteData, $quoteId = 3){

        $quote = $quoteData->previewEntrance($quoteId);

        return inertia('Quotes/Preview/Index', compact('quote'));
    }

}
