<?php

namespace App\Http\Controllers;

use App\Repositories\Quotes\Quote;
use App\Repositories\Teams\Team;
use Illuminate\Http\Request;


class HomeController extends Controller
{
    public function index(){
        
        $quotes = auth()->user()->isFreetravelerAdmin()
                    ? Quote::getOperationDashboard()
                    : Quote::getOperationsByAgency();

        return inertia('Dashboard', [
            'quotes' => $quotes,
            'agencies' => Team::getTeams()
        ]);

    }

    public function filter(Quote $quotes)
    {
        $quotes = request()->user()->isFreetravelerAdmin()
                    ? $quotes->getFiltered(request())
                    : $quotes->getFilteredForAgency(request());
        return inertia('Dashboard', [
            'quotes' => $quotes,
            'agencies' => Team::getTeams()
        ]);
    }
}
