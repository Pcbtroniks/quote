<?php

namespace App\Http\Controllers\Quotes;

use App\Repositories\Quotes\GetFilterQuotes;
use App\Repositories\Quotes\PutQuote;
use App\Http\Controllers\Controller;
use App\Repositories\Quotes\Quote;
use App\Repositories\Teams\Team;
use Illuminate\Http\Request;

class QuoteController extends Controller
{
    public function index()
    {
        $quotes = new GetFilterQuotes();
        return inertia('Quote/QuoteIndex', [
            'quotes' => $quotes->getScoped(request()),
            'params' => request()->all(),
            'agencies' => Team::getTeams()
        ]);
    }

    public function show(Quote $quote, $uuid)
    {
        $quote = $quote->preview($uuid);
        return inertia('Quote/QuoteShow', compact('quote'));
    }

    public function archive($id)
    {
        PutQuote::archive($id);
        return redirect()->back()->with(['success' => 'Cotización archivada']);
    }

}
