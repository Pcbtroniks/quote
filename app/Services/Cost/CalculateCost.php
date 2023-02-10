<?php

namespace App\Services\Cost;

use App\Services\Cost\PublicPrice;
use App\Interfaces\CostsInterface;
use Illuminate\Http\Request;
use App\Models\Activity;
use App\Enums\Discount;

class CalculateCost implements CostsInterface
{

    protected $activity;
    protected $adults;
    protected $minors;
    protected $season;
    protected $price;
    protected $type;
    protected $zone;

    public function __construct($request)
    {
        $this->activity = Activity::find($request->activity);
        
        $this->adults = $request->adults;
        $this->minors = $request->minors;
        $this->season = $request->season;
        $this->zone = $request->zone;
        $this->type = $request->type;

        $this->price = new PublicPrice($this->activity, $this->adults, $this->minors, $this->season, $this->zone);
    }

    public function getActivity(): Activity
    {
        return $this->activity;
    }

    public function applyDiscount()
    {
        $applyDiscount = $this->resolveDiscountType();

        return new $applyDiscount($this->price);
    }

    public function resolveDiscountType()
    {
        $DiscountClass = [
            'pack_multiple' => \App\Services\Cost\MultipleDiscount::class,
            'pack_double' => \App\Services\Cost\DoubleDiscount::class,
            'entrance' => \App\Services\Cost\EntranceDiscount::class,
            'tour' => \App\Services\Cost\TourDiscount::class,
        ];

        return $DiscountClass[$this->type];
    }

    public function getCost(): float
    {
        return $this->activity->price;
    }

    public function getPrice(): PublicPrice
    {
        return $this->price;
    }

    public function getDescription(): mixed
    {
        return "Precio Público: {$this->activity->price}$";
    }

    public function getDiscounts()
    {
        return $this->activity->discounts;
    }
}