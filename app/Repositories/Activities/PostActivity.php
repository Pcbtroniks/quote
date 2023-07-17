<?php

namespace App\Repositories\Activities;

use App\Models\Activity;

class PostActivity {

    public function storeActiviy($activityData)
    {
        return Activity::create([
            'name' => $activityData['activity_name'],
            'type' => $activityData['activity_type'],
        ]);
    }
}