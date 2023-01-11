<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Jetstream\Events\TeamCreated;
use Laravel\Jetstream\Events\TeamDeleted;
use Laravel\Jetstream\Events\TeamUpdated;
use Laravel\Jetstream\Team as JetstreamTeam;
use \Awobaz\Compoships\Compoships;

class Team extends JetstreamTeam
{
    use HasFactory;
    use Compoships;

    public const PublicTeam = 'Public';

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'personal_team' => 'boolean',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'user_id',
        'personal_team',
        'sale_amount_percentage'
    ];

    /**
     * The event map for the model.
     *
     * @var array
     */
    protected $dispatchesEvents = [
        'created' => TeamCreated::class,
        'updated' => TeamUpdated::class,
        'deleted' => TeamDeleted::class,
    ];

    public function quotes() {
     
        return $this->hasMany(Quote::class);
     
    }

    public function activity_discounts() 
    { 
        return $this->hasMany(ActivityAgencyDiscount::class);
    }
}
