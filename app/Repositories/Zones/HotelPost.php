<?php

namespace App\Repositories\Zones;

use App\Models\Hotel as HotelModel;

class HotelPost {

    public function storeHotel($HotelName, $ZoneID)
    {
        return HotelModel::create([
            'name' => $HotelName,
            'zone_id' => $ZoneID
        ]);
    }

}