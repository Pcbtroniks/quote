<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActivityAgencyDiscount extends Model
{
    use HasFactory;

    protected $fillable = [
        'entrance',
        'tour',
        'pack',
        'pack_double',
        'pack_multiple',
        'activity_id',
        'team_id',
    ];

    public function activity()
    {
        return $this->belongsTo(Activity::class);
    }

    public function agency()
    {
        return $this->belongsTo(Team::class, 'team_id', 'id', 'teams');
    }
}
