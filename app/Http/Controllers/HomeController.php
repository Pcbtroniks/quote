<?php

namespace App\Http\Controllers;

use App\Models\Team;
use App\Repositories\Quotes\Quote;
use Illuminate\Http\Request;


class HomeController extends Controller
{
    public function index(){

        
        $quotes = auth()->user()->isFreetravelerAdmin()
                    ? Quote::getOperationDashboard()
                    : Quote::getOperationsByAgency();


        return inertia('Dashboard', compact('quotes'));

    }
}
