<?php

namespace App\Repositories\Pickups;

use Illuminate\Support\Facades\DB;

class PostPickup
{
    public function updatePickup($pickup, $pickup_time)
    {
        return DB::table('pickups')
        ->where('id', $pickup)
        ->update(['pickup_time' => $pickup_time]);
    }
}