<?php

namespace App\Repositories\Activities;

use App\Enums\ActivityType;
use App\Enums\Zone;
use App\Models\Activity as ActivityModel;
use Illuminate\Http\Request;

class Activity {

    public function getActivities(Request $request,int $limit = 10)
    {
        return ActivityModel::when($request->type, function ($q) use ($request){
                    $q->where('type', $request->type ?? 'park');
                })
                ->with('prices', function ($query) use($request) {
                    $query->where('zone_id', $request->zone ?? 4);
                })->with('agency_discounts')
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

}