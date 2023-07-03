<?php 

namespace App\Http\Controllers\Pickups;

use App\Http\Controllers\Controller;
use App\Repositories\Activities\Activity;
use App\Repositories\Pickups\GetPickups;
use App\Repositories\Pickups\PostPickup;

class PickupController extends Controller
{
    public function index(GetPickups $getPickups, $zone, $activity)
    {
        // dd($getPickups->getPickupsByZoneAndActivity($zone, $activity));
        return inertia('Pickups/Index', [
            'pickups' => $getPickups->getPickupsByZoneAndActivity($zone, $activity),
            'tours' => Activity::getTours(),
            'params' => [
                'zone' => $zone,
                'activity' => $activity
            ]
        ]);
    }
    
    public function update(PostPickup $PostPickup, $pickup)
    {
        return response()->json([
            'message' => 'success',
            'data' => $PostPickup->updatePickup($pickup, request()->pickup_time)
        ]);
    }


}