<?php

namespace App\Http\Controllers;

use App\Models\Activity as ActivityModel;
use App\Repositories\Activities\Activity;
use App\Repositories\Activities\PostActivity;
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

    public function create(ActivityModel $activity)
    {
        return inertia('Activities/Create',[
            'activity' => $activity,
        ]);
    }

    public function store(PostActivity $postActivity)
    {
        $activityData = request()->validate([
            'activity_type' => 'required',
            'activity_name' => 'required',
        ]);

        $postActivity->storeActiviy($activityData);

        return redirect()->back()->with('message','Activity created successfully');
    }

    public function update(Activity $activity, $id)
    {
        $activity->updateActivity(request(), $id);
        return redirect()->back()->with('message','Activity updated successfully');
    }
}
