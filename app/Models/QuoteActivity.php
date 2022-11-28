<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Dateable;

class QuoteActivity extends Model
{
    use HasFactory, Dateable;

    protected $table = 'quote_activity';

    public $fillable = [
        'quote_id',
        'activity_id',
        'date',
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

    public function hotel() {
     
        return $this->belongsTo(Hotel::class, 'hotel_id', 'id');
     
    }

    /**
     * Date Translation
     * @return string
    */
    public function date(): Attribute{

        return Attribute::make(
            get: fn ($value) => $this->toLocaleDateStringES($value),
        );

    }

}
