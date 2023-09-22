<?php

namespace App\Traits;

use App\Models\Team;
use Attribute;

trait Freetravelable {

    /**
     * Returns if user is Freetraveler Admin
     * @return Bool
     */

    public function getIsFreetravelerAdminAttribute()
    {
        return $this->isFreetravelerAdmin();
    }

    public function isFreetravelerAdmin()
    {
    $team = Team::where('name', 'Freetravelers')->first();
    return $this->belongsToTeam($team) && $this->hasTeamRole($team, 'admin');
    }

}