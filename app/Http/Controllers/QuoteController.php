<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QuoteController extends Controller
{
    
    public function index(){

        return inertia('Quotes/Index');
    
    }

    public function store(){
        
        return redirect()->route('dashboard')->with('message','Some message');

    }

}
