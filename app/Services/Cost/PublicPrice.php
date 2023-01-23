<?php

namespace App\Services\Cost;

use App\Interfaces\CostsInterface;

class PublicPrice
{

    public $activity;
    public $amount;
    public $date;
    public $zone;
    public $pax;

    public function __construct($activity)
    {
        $this->activity = $activity;
    }

    public function getActivityCosts()
    {
        return $this->activity->costs;
    }

    public function setPax(int $adults, int $minors, int $infants = 0)
    {
        $this->pax['adults'] = $adults;
        $this->pax['minors'] = $minors;
        $this->pax['infants'] = $infants;
    }

    public function getCost()
    {
        return $this->amount;
    }

}