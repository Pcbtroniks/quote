<?php
namespace App\Models\Traits;

use App\Repositories\Localisation\Currencies\GetCurrency;
use App\Services\Localisation\Currency\CurrencyService;

trait ConvertCurrency
{
    public function convertCurrency($amount)
    {
        $currency = CurrencyService::GetCurrencyCode();

        if($currency == CurrencyService::GetDefaultCurrencyCode())
        {
            return $amount;
        }
        $currency = GetCurrency::getCurrencyByCode($currency);

        return round(($amount * $currency->conversion_rate), 2);
    }
}