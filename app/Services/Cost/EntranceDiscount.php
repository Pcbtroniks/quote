<?php

namespace App\Services\Cost;

use App\Interfaces\CostsInterface;
use App\Interfaces\PriceInterface;

class EntranceDiscount implements CostsInterface
{
    use \App\Traits\Computable;
    protected $costs;

    public function __construct(PriceInterface $costs)
    {
        $this->costs = $costs;
    }

    public function getCost(): float
    {
        return $this->applyDiscount($this->costs->getCost(), $this->costs->getDiscounts()->entrance);
    }

    public function getDescription(): mixed
    {
        return $this->costs->getDescription() . ", Descuento \"Entrada\" {$this->costs->getDiscounts()->entrance}%: {$this->getCost()}$";
    }
}