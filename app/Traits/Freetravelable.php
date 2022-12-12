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
         $freetravelerTeam = Team::where('name', 'Freetravelers')->first();
         return $freetravelerTeam->hasUser($this);
     }

}