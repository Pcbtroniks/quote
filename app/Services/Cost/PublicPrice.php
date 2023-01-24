<?php

namespace App\Services\Cost;

use App\Interfaces\CostsInterface;

class PublicPrice implements CostsInterface
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

    public function calculate()
    {
        $this->amount = $this->activity->price * $this->pax;
    }

}