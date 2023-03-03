<?php

namespace App\Http\Controllers\Team;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Team;

class CurrentTeamController extends Controller
{
    public function update(Request $request)
    {
        $request->validate([
            'team_id' => ['required', 'exists:teams,id'],
        ]);

        $team = Team::findOrFail($request->team_id);
        if (! $request->user()->switchTeam($team)) {
            abort(403);
        }

        return redirect('dashboard', 303);
    }

}
