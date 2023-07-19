<?php 

namespace App\Repositories\Prices;

use App\Models\ActivityAgencyDiscount as Costs;

class PostCosts {

    public function storeCost($data)
    {
        return Costs::create([
            'activity_id' => $data['activity_id'],
            'team_id' => $data['team_id'],
            'entrance' => $data['entrance'],
            'tour' => $data['tour'],
            'pack' => $data['pack'],
            'pack_double' => $data['pack_double'],
            'pack_multiple' => $data['pack_multiple'],
        ]);
    }

    public function updateCost($data)
    {
        return Costs::where([
            'activity_id' => $data['activity_id'],
            'team_id' => $data['team_id'],
            ])->update(
            [
                'entrance' => $data['entrance'],
                'tour' => $data['tour'],
                'pack' => $data['pack'],
                'pack_double' => $data['pack_double'],
                'pack_multiple' => $data['pack_multiple'],
            ]);
    }

    public function upsertCosts($data)
    {
        return Costs::updateOrCreate([
            'activity_id' => $data['activity_id'],
            'team_id' => $data['team_id'],
        ],[
            'entrance' => $data['entrance'],
            'tour' => $data['tour'],
            'pack' => $data['pack'],
            'pack_double' => $data['pack_double'],
            'pack_multiple' => $data['pack_multiple'],
        ]);
    }
}