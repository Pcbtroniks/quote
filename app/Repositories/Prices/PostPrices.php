<?php

namespace App\Repositories\Prices;

use App\Models\Price;

class PostPrices {

    /**
     * Insert a new record in the database.
     * @param  array  $data
     * @return \App\Models\Price
     */
    public function storePrice($data)
    {
        return Price::create([
            'amount' => $data['amount'],
            'activity_id' => $data['activity_id'],
            'zone_id' => $data['zone_id'],
            'season' => $data['season'],
            'type' => $data['type'],
        ]);
    }

    /**
     * Inserts multiple records in the database.
     * @param  array  $data
     * @return \App\Models\Price
     */

    public function storePrices($data)
    {
        $prices = [];
        foreach ($data['prices'] as $price) {
            $prices[] = [
                'amount' => $price['amount'],
                'activity_id' => $data['activity_id'],
                'zone_id' => $data['zone_id'],
                'season' => $data['season'],
                'type' => $price['type'],
            ];
        }
        return Price::insert($prices);
    }

    public function upsertPrice($data)
    {
        return Price::updateOrCreate([
            'activity_id' => $data['activity_id'],
            'zone_id' => $data['zone_id'],
            'season' => $data['season'],
            'type' => $data['type'],
        ],[
            'amount' => $data['amount'],
        ]);
    }

    public function upsertPrices($data)
    {
        $updated = [];
        
        if(is_array($data)){
            foreach ($data as $price) {
               $updated[] = $this->upsertPrice($price);
            }
        } else {
            $updated[] = $this->upsertPrice($data);
        }

        return $updated;
    }
}