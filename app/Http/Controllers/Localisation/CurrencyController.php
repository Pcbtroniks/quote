<?php

namespace App\Http\Controllers\Localisation;

use App\Http\Controllers\Controller;
use App\Http\Requests\Localisation\StoreCurrencyRequest;
use App\Models\Localisation\Currency;
use App\Repositories\Localisation\Currencies\GetCurrencies;
use App\Repositories\Localisation\Currencies\GetCurrency;
use App\Repositories\Localisation\Currencies\PostCurrency;

class CurrencyController extends Controller
{
    public function index()
    {
        return inertia('Currencies/Index', [
            'currencies' => GetCurrencies::getPaginated()
        ]);
    }

    public function show(Currency $currency)
    {
        return inertia('Currencies/Show', [
            'currency' => $currency
        ]);
    }

    public function store(StoreCurrencyRequest $request)
    {
        $currency = PostCurrency::fromRequest($request);
        return redirect()->back()->with([
            'success' => true,
            'currency' => $currency
        ]);
    }

    public function destroy(Currency $currency)
    {
        $currency->delete();
        return redirect()->route('localisation.currencies.index')->with([
            'success' => true
        ]);
    }
}
