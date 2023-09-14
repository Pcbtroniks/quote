<?php

namespace App\Repositories\Branches;

use Illuminate\Support\Facades\DB;

class BranchUsers {

    public static function updateBranchUsers($branch, $users)
    {
        $updates = [];
        foreach($users as $user)
        {
            $updates[] = DB::table('users')->where('id', $user['user_id'])->update(['branch_id' => $user['branch_id']]);
        }
        return $updates;
    }

}