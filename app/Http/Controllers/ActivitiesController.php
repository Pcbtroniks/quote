<?php

namespace App\Http\Controllers;

use App\Repositories\Activities\Activity;

class ActivitiesController extends Controller
{
    public function index(Activity $activity)
    {
        // return $activity->getActivities(request());
        return inertia('Activities/Index', [
            'activities' => $activity->getActivities(request()),
            'ActivityType'=> request()->type ?? 'park'
        ]); 
    }
}
