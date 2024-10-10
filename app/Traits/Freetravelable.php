<?php

namespace App\Traits;

use App\Models\Team;

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
    $team = Team::where('id', 2)->first();
        if($team) {
            return $this->belongsToTeam($team) && $this->hasTeamRole($team, 'admin');
        } else {
            return false;
        }
    }

    public function getPermissionsAttribute()
    {
        if(auth()->check()) {
            return auth()->user()->teamPermissions(auth()->user()->currentTeam);
        } else {
            return [];
        }
    }
}