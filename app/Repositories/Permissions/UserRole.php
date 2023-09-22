<?php

namespace App\Repositories\Permissions;

use App\Models\User;

class UserRole {

    public static function UserHasRoleTeam(User $user, $role, $team = null)
    {
        return $user->hasTeamRole($team ?? $user->currentTeam, $role);
    }

    public static function isAgencyAdmin(User $user)
    {
        return $user->hasTeamRole($user->currentTeam, 'agency');
    }

    public static function isBranchAdmin(User $user)
    {
        return $user->hasTeamRole($user->currentTeam, 'branch');
    }

    public static function isSeller(User $user)
    {
        return $user->hasTeamRole($user->currentTeam, 'seller');
    }

}