<?php

namespace App\Http\Controllers;

use App\Http\Requests\Quote\Save;
use App\Repositories\Quotes\Quote;
use Illuminate\Http\Request;

class QuoteController extends Controller
{
    
    public function index(){

        return inertia('Quotes/Index');
    
    }

    public function store(Save $request, Quote $quote){

        $quote->save($request);
        
        dd($request->validated());


    }

    public function show(){
        return inertia('Quotes/Preview/Index');
    }

}
