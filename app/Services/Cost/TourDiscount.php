<?php

namespace App\Services\Cost;

use App\Interfaces\CostsInterface;
use App\Interfaces\PriceInterface;

class TourDiscount implements CostsInterface
{
    use \App\Traits\Computable;
    protected $costs;

    public function __construct(PriceInterface $costs)
    {
        $this->costs = $costs;
    }

    public function getCost(): float
    {
        return $this->applyDiscount($this->costs->getCost(), $this->costs->getDiscounts()->tour);
    }

    public function getDescription(): mixed
    {
        return $this->costs->getDescription() . ", Descuento \"Tour\" {$this->costs->getDiscounts()->tour}%: {$this->getCost()}$";
    }
}