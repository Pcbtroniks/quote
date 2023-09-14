<?php

namespace App\Http\Controllers\Branches;

use App\Http\Controllers\Controller;
use App\Http\Requests\Branches\StoreBranchesRequest;
use App\Repositories\Branches\BranchUsers;
use App\Repositories\Branches\GetBranch;
use App\Repositories\Branches\PostBranch;
use Illuminate\Http\Request;

class BranchController extends Controller
{
    
    public function index()
    {
        return inertia('Branches/Show', [
            'branches' => GetBranch::getBranchesByTeamId(auth()->user()->currentTeam->id),
            'users' => auth()->user()->currentTeam->allUsers(),
        ]);
    }

    public function store(StoreBranchesRequest $request, PostBranch $postBranch)
    {
        $validated = $request->validated();

        $branch = $postBranch($validated);

        return redirect()->back()->with('success', 'Branch created.');
    }

    public function updateUsers(Request $request, $branch_id)
    {
        $branch = BranchUsers::updateBranchUsers($branch_id, $request->usersBeingUpdated);
        return redirect()->back()->with(['success' => 'Branch updated.', 'affected_result' => $branch]);
    }

}
