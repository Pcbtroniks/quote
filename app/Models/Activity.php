<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use App\Models\Price;
use App\Models\ActivityAgencyDiscount;

class Activity extends Model
{
    use HasFactory;
    
    public $fillable = [
        'name'
    ];

    protected $appends = ['filter_prices'];

    public function agency_discount()
    {
        return $this->hasOne(ActivityAgencyDiscount::class)
                    ->withDefault([
                        'entrance' => 0,
                        'tour' => 0,
                        'pack' => 0,
                        'pack_double' => 0,
                        'pack_multiple' => 0,
                        'team_id' => auth()->user()->currentTeam->id,
                    ]);
    }

    public function QuoteActivity(){
        return $this->belongsToMany(QuoteActivity::class,'quote_activity');
    }

    public function createdAt(): Attribute{

        return Attribute::make(
            get: fn ($date) => Carbon::parse($date)->format('d-m-Y'),
        );
    
    }

    public function prices(){
        return $this->hasMany(Price::class);
    }

    public function getFilterPricesAttribute()
    {
        return $this->prices->groupBy(['season', 'type']);
    }
}
