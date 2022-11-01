<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuoteActivity extends Model
{
    use HasFactory;

    protected $table = 'quote_activity';

    public $fillable = [
        'quote_id',
        'activity_id',
        'hotel_id',
        'pickup_time',
    ];

    public function quote(){

        return $this->belongsTo(Quote::class);

    }

    public function activity(){

        return $this->hasOne(Activity::class, 'id', 'activity_id');

    }

    public function activities(){

        return $this->hasMany(Activity::class, 'id', 'activity_id');

    }
}
