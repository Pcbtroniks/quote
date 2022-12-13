<?php

namespace App\Repositories\Activities;

use App\Models\Activity as ActivityModel;
use Illuminate\Http\Request;

class Activity {

    public function getActivities(Request $request,int $limit = 10)
    {
        return ActivityModel::when($request->type, function ($q) use ($request){
                    $q->where('type', $request->type ?? 'park');
                })
                ->with('price', function ($query) use($request) {
                    $query->where('zone_id', $request->zone ?? 4);
                })
                ->paginate($limit);
    }

}