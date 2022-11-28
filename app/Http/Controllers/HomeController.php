<?php

namespace App\Http\Controllers;

use App\Repositories\Quotes\Quote;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(){

        
        $quotes = Quote::getWithActivities(5);
        return inertia('Dashboard', compact('quotes'));

    }
}
