<?php

namespace App\Repositories\Permissions;

use App\Models\User;

class UserPermission {

    public static function Can(User $user, $permission)
    {
        return $user->hasTeamPermission($user->currentTeam, $permission);
    }

    public static function CanManageAgencies(User $user)
    {
        return $user->hasTeamPermission($user->currentTeam, 'manage.agencies');
    }

    public static function CanManageBranches(User $user)
    {
        return $user->hasTeamPermission($user->currentTeam, 'manage.branches');
    }
}