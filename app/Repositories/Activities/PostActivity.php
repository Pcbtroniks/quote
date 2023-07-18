<?php

namespace App\Repositories\Activities;

use App\Models\Activity;

class PostActivity {

    public function storeActiviy($activityData)
    {
        return Activity::insertGetId([
            'name' => $activityData['activity_name'],
            'type' => $activityData['activity_type'],
        ]);
    }

    public function updateOnlyActivity($data)
    {
        return Activity::find($data['activity_id'])->update([
            'name' => $data['activity_name'],
            'type' => $data['activity_type'],
        ]);
    }
}