<?php

namespace App\Repositories\Pickups;

use Illuminate\Support\Facades\DB;

class PostPickup
{
    public function storePickup($pickup)
    {
        return DB::table('pickups')->insertGetId([
            'activity_id' => $pickup['activity'],
            'zone_id' => $pickup['zone'],
            'hotel_id' => $pickup['hotel'],
            'pickup_time' => $pickup['pickup_time'],
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

    public function updatePickup($pickup, $pickup_time)
    {
        return DB::table('pickups')
        ->where('id', $pickup)
        ->update(['pickup_time' => $pickup_time]);
    }

    public function updateMultiplePickups($pickups)
    {
        $result = [];
        try {
            foreach ($pickups as $pickup) {
                $result[] = DB::table('pickups')
                ->where('id', $pickup['id'])
                ->update(['pickup_time' => $pickup['pickup_time']]);
            }
        } catch (\Throwable $th) {
            $result = [
                'error' => $th->getMessage()
            ];
        }
        return $result;
    }
}