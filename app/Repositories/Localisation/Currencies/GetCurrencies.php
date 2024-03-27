<?php

namespace App\Repositories\Localisation\Currencies;

use App\Models\Localisation\Currency;

class GetCurrencies
{
    public static function getPaginated($limit = 15)
    {
        return Currency::paginate($limit);
    }

    public static function all()
    {
        return Currency::all();
    }
}