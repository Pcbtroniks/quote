<?php

namespace App\Services\Localisation\Currency;

use App\Models\Localisation\Currency;

class CurrencyService
{
    public static function GetDefaultCurrencyCode()
    {
        return config('app.currency');
    }
    public static function GetCurrencyCode()
    {
        return session()->has('currency')
            ? session('currency')
            : self::GetDefaultCurrencyCode();
    }
}