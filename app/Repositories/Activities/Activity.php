<?php

namespace App\Repositories\Activities;

use App\Models\Activity as ActivityModel;
use Illuminate\Http\Request;
use App\Enums\ActivityType;
use App\Enums\Zone;
use App\Models\Price;
use Illuminate\Support\Facades\DB;

class Activity {

    public static function getTours()
    {
        return ActivityModel::where('type', ActivityType::Tour->getType())->orderBy('name', 'asc')->get();
    }

    public function getActivities(Request $request, int $limit = 10)
    {
        return ActivityModel::where('type', $request->type ?? 'park')
                            ->with('prices', function ($query) use($request) {
                                $query->where('zone_id', $request->zone ?? 4);
                            })
                            ->paginate($limit);
    }

    public function getDefaulFilters(string $filter = null)
    {
        $defaults = [
            'type' => ActivityType::Park->getType(),
            'zone' => Zone::Nacional->getID(),
            'page' => 1
        ];

        return isset($filter) 
                ? $defaults[$filter]
                : $defaults;
    }

    public function updateActivity(Request $request, int $id)
    {
        $activity =  ActivityModel::find($id);

        if(isset($request->name) && $request->name != $activity->name)
        {
            $this->updateName($id, $request->name);
        }

        $activity->discounts->updateOrCreate([
            'team_id' => auth()->user()->currentTeam->id,
            'activity_id' => $id,

        ],[
            'entrance' => $request->entrance,
            'tour' => $request->tour,
            'pack' => $request->pack,
            'pack_double' => $request->pack_double,
            'pack_multiple' => $request->pack_multiple,
            
        ]);

        $prices = $this->activityPricesAdapter($request);

        foreach ($prices as $key => $value) {
            Price::updateOrCreate([
                'activity_id' => $id,
                'season' => $value['season'],
                'type' => $value['type'],
                'zone_id' => $request->zone_id,
            ],[
                'amount' => $value['amount'],
            ]);
        }

    }

    public function updateName($id, $name) 
    {
        return ActivityModel::find($id)->update(['name' => $name]);
    }

    /**
     * Activity prices adapter
     * 
     * Convert the request to an array of prices clasiified by season and type
     * I.E. $request->adult_high to ['season' => 'high', 'type' => 'adult', 'amount' => 100]
     * 
     * 
     * @param Request $request
     * @return array
     */
    public function activityPricesAdapter($request)
    {
        $getPrices = $this->getPricesFromRequest($request);
        $prices = [];
        foreach($getPrices as $key => $value)
        {
            if($key == '_token' || $key == '_method') continue;
            $prices[] = [
                'season' => explode('_', $key)[1],
                'type' => explode('_', $key)[0],
                'amount' => $value
            ];
        }
        return $prices;
    }

    public function getPricesFromRequest($request)
    {
        return [
            'adult_high' => $request->adult_high ?? 0,
            'adult_low' => $request->adult_low ?? 0,
            'kid_high' => $request->kid_high ?? 0,
            'kid_low' => $request->kid_low ?? 0,
        ];
    }

}