<?php

namespace App\Http\Controllers\Localisation\API;

use App\Http\Controllers\Controller;
use App\Repositories\Localisation\Currencies\GetCurrency;
use Illuminate\Http\Request;

class CurrencyAPIController extends Controller
{
    public function index()
    {
        return response()->json([
            'message' => 'Currency API',
        ]);
    }

    public function get($currency, GetCurrency $getCurrency)
    {
        return response()->json([
            'message' => 'Currency API',
            'currency' => getCurrency::getCurrencyByCode($currency),
        ]);
    }
}
