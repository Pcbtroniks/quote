<?php

namespace App\Repositories\Localisation\Currencies;

use App\Models\Localisation\Currency;

class PostCurrency
{
    public static function fromRequest($request)
    {
        $data = $request->validated();
        $currency = Currency::where('code', $data['code'])->first()
                    ?? new Currency;
        return $currency->exists 
                ? self::Update($data, $currency) 
                : self::Store($data);
    }

    public static function Store($data)
    {
        return Currency::create($data);
    }

    public static function Update($data, Currency $currency)
    {
        return $currency->update($data);
    }
}