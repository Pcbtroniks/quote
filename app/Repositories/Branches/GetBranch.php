<?php

namespace App\Repositories\Branches;

use App\Models\Branch;

class GetBranch
{
    public function __invoke($id)
    {
        return Branch::find($id);
    }

    public static function getBranchesByTeamId($team_id)
    {
        return Branch::where('team_id', $team_id)->get();
    }
}