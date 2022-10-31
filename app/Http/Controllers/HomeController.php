<?php

namespace App\Http\Controllers;

use App\Repositories\Quotes\Quote;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(){

        
        $quotes = Quote::get(2);
        // dd($quotes);

        return inertia('Dashboard', compact('quotes'));

    }
}
