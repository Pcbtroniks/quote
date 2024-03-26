<?php

namespace App\Services\Localisation\Currency;

use App\Models\Localisation\Currency;

class ConvertCurrency
{
    public static function ApplyConversionRate($amount, Currency $rate)
    {
        return $amount * $rate;
    }
}