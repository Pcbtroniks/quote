<?php

namespace App\Http\Controllers\Quotes;

use App\Http\Controllers\Controller;
use App\Repositories\Quotes\GetFilterQuotes;
use App\Repositories\Quotes\GetQuotes;
use App\Repositories\Quotes\PutQuote;
use App\Repositories\Quotes\Quote;
use Illuminate\Http\Request;

class QuoteController extends Controller
{
    public function index()
    {
        $quotes = new GetFilterQuotes();
        return inertia('Quote/QuoteIndex', [
            'quotes' => $quotes->getScoped(request()),
            'params' => request()->all(),
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
        return redirect()->route('quote.index');
    }

}
