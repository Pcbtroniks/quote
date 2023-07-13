<?php 

namespace App\Http\Controllers\Pickups;

use App\Http\Controllers\Controller;
use App\Http\Requests\Pickcups\StorePickupRequest;
use App\Models\Activity as ActivityModel;
use App\Models\Hotel as HotelModel;
use App\Models\Zone;
use App\Repositories\Activities\Activity;
use App\Repositories\Pickups\GetPickups;
use App\Repositories\Pickups\PostPickup;
use App\Repositories\Zones\Hotel;
use Illuminate\Support\Facades\Request;

class PickupController extends Controller
{
    public function index(GetPickups $getPickups, $zone, $activity)
    {
        return inertia('Pickups/Index', [
            'pickups' => $getPickups->getPickupsByZoneAndActivity($zone, $activity),
            'tours' => Activity::getTours(),
            'params' => [
                'zone' => $zone,
                'activity' => $activity
            ]
        ]);
    }

    public function byHotel(GetPickups $getPickups, $hotel = null)
    {
        $hotel = $hotel ?? HotelModel::first()->id;
        return inertia('Pickups/ByHotel', [
            'pickups' => $getPickups->getPickupsByHotel($hotel),
            'hotels' => Hotel::getHotels(),
            'params' => [
                'hotel' => $hotel,
            ]
        ]);
    }

    public function create(PostPickup $PostPickup)
    {
        return inertia('Pickups/Create', [
            'params' => request()->all(),
            'tours' => Activity::getTours(),
        ]);
    }

    public function store(StorePickupRequest $pickupRequest, PostPickup $PostPickup)
    {
        return response()->json([
            'message' => 'success',
            'data' => $pickupRequest->validated()
        ]);
        $PostPickup->storePickup($pickupRequest->validated());
        return response()->json([
            'message' => 'success'
        ]);
    }

    public function byZone(GetPickups $getPickups, $zone = null, $activity = null)
    {
        $activity = $activity ?? ActivityModel::where('type', 'tour')->first()->id;
        $zone = $zone ?? Zone::first()->id;
        return inertia('Pickups/ByZone', [
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

    public function updateMultiple(PostPickup $PostPickup, $pickup)
    {
        return response()->json([
            'message' => 'success',
            'result' => $PostPickup->updateMultiplePickups($pickup, request()->pickup_time)
        ]);
    }


}