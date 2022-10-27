<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quote extends Model
{
    use HasFactory;

    public $fillable = [
        'uuid',
        'user_id',
        'coupon_id',
        'national',
        'season',
        'quote_type',
        'activity_date',
        'holder_name',
        'adults',
        'minors',
        'infants',
        'notes',
        'status'
    ];

    public function user(){

        return $this->belongsTo(User::class);

    }

    public function coupon(){

        return $this->belongsTo(Coupon::class);

    }

    public function listed_activity(){

        return $this->hasMany(QuoteActivity::class);

    }
}
