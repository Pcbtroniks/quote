<?php

namespace App\Services\Price;

class PriceAdapter
{
    /**
     * Activity prices adapter
     * 
     * Convert the request to an array of prices clasiified by season and type
     * I.E. $request->adult_high ['adult_high' => 100] to ['season' => 'high', 'type' => 'adult', 'amount' => 100]
     * 
     * 
     * @param Request $request
     * @return array
     */
    public static function activityPricesAdapter($request)
    {
        $getPrices = self::getPricesFromRequest($request);
        $prices = [];
        foreach($getPrices as $key => $value)
        {
            // if($key == '_token' || $key == '_method') continue;
            $prices[] = [
                'season' => explode('_', $key)[1],
                'type' => explode('_', $key)[0],
                'amount' => $value
            ];
        }
        return $prices;
    }

    public static function getPricesFromRequest($request)
    {
        return [
            'adult_high' => $request->adult_high ?? 0,
            'adult_low' => $request->adult_low ?? 0,
            'kid_high' => $request->kid_high ?? 0,
            'kid_low' => $request->kid_low ?? 0,
        ];
    }
}