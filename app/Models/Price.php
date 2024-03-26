<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Activity;
use App\Models\Mutators\CurrencyConverterMutator;

class Price extends Model
{
    use HasFactory,
        CurrencyConverterMutator;

    protected $fillable = [
        'amount',
        'activity_id',
        'zone_id',
        'season',
        'type',
    ];

    public function activity()
    {
        $this->belongsTo(Activity::class);
    }
}
