<?php

namespace App\Http\Controllers;

use App\Repositories\Activities\Activity;
use Illuminate\Http\Request;

class ActivitiesController extends Controller
{
    public function index(Activity $activity)
    {
        /* dd( $activity->getActivities(request())); */
        return inertia('Activities/Index', [
            'activities' => $activity->getActivities(request()),
            'filters'=> [
                'zone' => request()->zone ?? $activity->getDefaulFilters('zone'),
                'type' => request()->type ?? $activity->getDefaulFilters('type'),
                'page' => request()->page ?? $activity->getDefaulFilters('page'),
            ]
        ]); 
    }

    public function update(Activity $activity, $id)
    {
        $activity->updateActivity(request(), $id);
        return redirect()->back()->with('message','Activity updated successfully');
    }
}
