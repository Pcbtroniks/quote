<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Activity;

class Price extends Model
{
    use HasFactory;

    public function activity()
    {
        $this->belongsTo(Activity::class);
    }
}
