<?php

namespace App\Repositories\Branches;

use App\Models\Branch;

class PostBranch
{
    public function __invoke($data)
    {
        return Branch::create($data);
    }
}