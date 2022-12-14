<?php

namespace App\Http\Controllers;

use App\Repositories\Activities\Activity;

class ActivitiesController extends Controller
{
    public function index(Activity $activity)
    {
        // return $activity->getActivities(request());
        // dd(Zone::RivieraMaya->value);
        // return Zone::Cancun;
        return inertia('Activities/Index', [
            'activities' => $activity->getActivities(request()),
            'filters'=> [
                'zone' => request()->zone ?? $activity->getDefaulFilters('zone'),
                'type' => request()->type ?? $activity->getDefaulFilters('type'),
                'page' => request()->page ?? $activity->getDefaulFilters('page'),
            ]
        ]); 
    }
}
