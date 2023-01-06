<?php

namespace App\Repositories\Activities;

use App\Models\Activity as ActivityModel;
use Illuminate\Http\Request;
use App\Enums\ActivityType;
use App\Enums\Zone;

class Activity {

    public function getActivities(Request $request,int $limit = 10)
    {
        return ActivityModel::where('type', $request->type ?? 'park')
                            ->with('prices', function ($query) use($request) {
                                $query->where('zone_id', $request->zone ?? 4);
                            })->with('agency_discount', function ($query) use($request) {
                                $query->where('team_id', auth()->user()->currentTeam->id);
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

        $activity->agency_discounts()->updateOrCreate([
            'team_id' => auth()->user()->currentTeam->id,
            'activity_id' => $id,

        ],[
            'entrance' => $request->entrance,
            'tour' => $request->tour,
            'pack' => $request->pack,
            'pack_double' => $request->pack_double,
            'pack_multiple' => $request->pack_multiple,
        ]);
    }

    public function updateName($id, $name) 
    {
        return ActivityModel::find($id)->update(['name' => $name]);
    }

}