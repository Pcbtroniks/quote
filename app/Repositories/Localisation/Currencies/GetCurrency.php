<?php

namespace App\Repositories\Localisation\Currencies;

use App\Models\Localisation\Currency;

class GetCurrency
{
    public static function getCurrency(Currency $currency = new Currency)
    {
        return $currency;
    }

    public static function getCurrencyByCode($code)
    {
        return Currency::where('code', $code)->first();
    }
}
