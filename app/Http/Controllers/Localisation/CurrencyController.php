<?php

namespace App\Http\Controllers\Localisation;

use App\Http\Controllers\Controller;
use App\Http\Requests\Localisation\StoreCurrencyRequest;
use App\Models\Localisation\Currency;
use App\Repositories\Localisation\Currencies\GetCurrency;
use App\Repositories\Localisation\Currencies\PostCurrency;

class CurrencyController extends Controller
{
    public function index()
    {
        return inertia('Currencies/Index', [
            'currencies' => Currency::all()
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
        dd($currency);
    }
}
