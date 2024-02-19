<?php

namespace App\Http\Controllers\Quotes;

use App\Http\Controllers\Controller;
use App\Repositories\Quotes\GetFilterQuotes;
use App\Repositories\Quotes\GetQuotes;
use Illuminate\Http\Request;

class QuoteController extends Controller
{
    public function index()
    {
        $quotes = new GetFilterQuotes();
        // dd($quotes->getScoped(request()));
        return inertia('Quote/QuoteIndex', [
            'quotes' => $quotes->getScoped(request()),
            'params' => request()->all(),
        ]);
    }

}
