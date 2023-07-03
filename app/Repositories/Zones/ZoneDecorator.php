<?php

namespace App\Repositories\Zones;

class ZoneDecorator {

    /**
     * 
     * If zone is 2 (Playa del Carmen) then transform to 1 (Cancun)
     * otherWise return the same zone
     * 
     * @param $Zone int [1,2,3, ...]
     * 
     * @return int [1,3, ...]
     */
    public static function ParsePlayaDelCarmenToCancun(int $Zone) : int
    {
        return $Zone = $Zone == 2 
                ? 1 
                : $Zone;
    }

}