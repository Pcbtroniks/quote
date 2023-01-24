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

    protected $appends = ['filter_prices', 'discounts'];

    public function discounts(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => ActivityAgencyDiscount::where('activity_id', $this->id)->where('team_id', auth()->user()->currentTeam->id)->first() ??  $this->getDefaultDiscountAttribute()
        );
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

    public function getDefaultDiscountAttribute()
    {
        return ActivityAgencyDiscount::first();
    }
}
