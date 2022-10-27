<?php

namespace App\Http\Controllers;

use App\Http\Requests\Quote\Save;
use App\Models\Activity;
use App\Repositories\Quotes\Quote;
use Illuminate\Http\Request;

class QuoteController extends Controller
{
    
    public function index(Quote $quote){

        $parks = $quote->getParks();

        return inertia('Quotes/Index', compact('parks'));
    
    }

    public function parks(Quote $quote){

        return response()->json($quote->getParks());
    
    }

    public function tours(Quote $quote){

        return response()->json($quote->getTours());
    
    }

    public function store(Save $request, Quote $quote){

        $quote->save($request);
        
        dd($request->validated());


    }

    public function preview(Quote $quoteData, $quote_id = null){

        $quote = $quoteData->preview(1);

        return inertia('Quotes/Preview/Index', compact('quote'));
    }

}
