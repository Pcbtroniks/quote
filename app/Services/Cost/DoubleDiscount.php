<?php

namespace App\Services\Cost;

use App\Interfaces\CostsInterface;
use App\Interfaces\PriceInterface;

class DoubleDiscount implements CostsInterface
{
    use \App\Traits\Computable;
    protected $costs;

    public function __construct(PriceInterface $costs)
    {
        $this->costs = $costs;
    }

    public function getCost(): float
    {
        $packDiscount = $this->applyDiscount($this->costs->getCost(), $this->costs->getDiscounts()->pack);
        $tourDiscount = $this->applyDiscount($packDiscount, $this->costs->getDiscounts()->pack_double);
        return $tourDiscount;
    }

    public function getDescription(): mixed
    {
        return $this->costs->getDescription() . ", Descuento \"Pack\" {$this->costs->getDiscounts()->pack}% + Descuento \"Tour Double\" {$this->costs->getDiscounts()->pack_double}%: {$this->getCost()}$";
    }
}