<?php

namespace App\Http\Controllers;

use App\Repositories\Quotes\GetQuotes;
use App\Repositories\Quotes\Quote;
use App\Repositories\Teams\Team;
use Illuminate\Http\Request;


class HomeController extends Controller
{
    protected $QuoteRepository;

    public function __construct()
    {
        $this->QuoteRepository = new GetQuotes();
    }

    public function index(){

        $getQuotes = $this->QuoteRepository->get(request(), request()->user()->isFreetravelerAdmin());

        return inertia('Dashboard', [
            'quotes' => $getQuotes,
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
