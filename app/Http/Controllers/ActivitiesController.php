<?php

namespace App\Http\Controllers;

use App\Repositories\Activities\Activity;
use Illuminate\Http\Request;

class ActivitiesController extends Controller
{
    public function index(Activity $activity)
    {
        return inertia('Activities/Index', [
            'activities' => $activity->getActivities(request()),
            'filters'=> [
                'zone' => request()->zone ?? $activity->getDefaulFilters('zone'),
                'type' => request()->type ?? $activity->getDefaulFilters('type'),
                'page' => request()->page ?? $activity->getDefaulFilters('page'),
            ]
        ]); 
    }

    public function update(Request $request, Activity $activity, $id)
    {
        //return request()->all();
        $activity->updateActivity(request(), $id);
        return redirect()->route('activities');
    }
}
