<?php

namespace App\Repositories\Teams;

use App\Models\Team as TeamModel;
use App\Models\User;
use Laravel\Jetstream\Events\AddingTeamMember;
use Laravel\Jetstream\Events\TeamMemberAdded;

class Team {


    public static function getPublicTeam(): TeamModel {
        
        return TeamModel::firstOrCreate(
            ['name' => TeamModel::PublicTeam],
            [
                'name' => TeamModel::PublicTeam,
                'user_id' => auth()->user()->id ?? User::first(['id'])->id,
                'personal_team' => false
            ]

        );

    }

    public static function addUser(User $newTeamMember, TeamModel $team = NULL, string $role = 'client'){

        $team = $team ?? self::getPublicTeam();

        AddingTeamMember::dispatch($team, $newTeamMember);
        
        $team->users()->attach(
            $newTeamMember, ['role' => $role]
        );

        TeamMemberAdded::dispatch($team, $newTeamMember);

    }

    // get teams for select
    public static function getTeams()
    {
        return TeamModel::select('id', 'name')->get();
    }

}