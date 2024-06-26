<?php

namespace App\Services\Cost;

use App\Interfaces\PriceInterface;
use App\Models\Activity;

class PublicPrice implements PriceInterface
{

    public $getDescription;
    public $activity;
    public $season;
    public $zone;
    public $pax;

    public function __construct(Activity $activity, int $adults = 0, int $minors = 0, string $season = 'low', int $zone)
    {
        $this->activity = $activity;
        $this->pax['adult'] = $adults;
        $this->pax['kid'] = $minors;
        $this->zone = $this->normalizeZone($zone);
        $this->season = $season;
        $this->getDescription = $this->getDescription();
    }

    public function getActivity()
    {
        return $this->activity;
    }

    public function getCost(): float
    {
        $costs = $this->getCosts();
        $costPerAdult = $costs['adult'][0]->amount * $this->pax['adult'];
        $costPerMinor = $costs['kid'][0]->amount * $this->pax['kid'];

        return (float) number_format($costPerAdult + $costPerMinor, 2, '.', '');
    }

    public function getCosts()
    {
        return $this->activity->prices->where('zone_id', $this->zone)->where('season', $this->season)->groupBy('type');
    }

    public function getDiscounts()
    {
        return $this->activity->discounts;
    }

    public function getDescription()
    {
        return "{$this->getActivity()->name} \"Costo Publico\": {$this->getCost()}$";
    }

    /**
     * Zone 1 (Cancun) and Zone 2 (Riviera Maya) are the same for public prices
     * */ 
    public function normalizeZone($zone)
    {
        return $zone == 2 ? 1 : $zone;
    }
}