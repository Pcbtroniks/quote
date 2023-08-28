<?php

namespace App\Services\Cost;

use App\Services\Cost\PublicPrice;
use App\Interfaces\CostsInterface;
use Illuminate\Http\Request;
use App\Models\Activity;
use App\Enums\Discount;
use App\Traits\Computable;

class CalculateCost implements CostsInterface
{
    use Computable;

    protected $activity;
    protected $adults;
    protected $minors;
    protected $season;
    protected $price;
    protected $type;
    protected $zone;

    protected $resolvedPrices;
    protected $pricesCollection;
    protected $totalPublicPrice;
    protected $totalAgencyCost;

    public function __construct($request)
    {
        $this->activity = Activity::find($request->activity);
        
        $this->adults = $request->adults;
        $this->minors = $request->minors;
        $this->season = $request->season;
        $this->zone = $request->zone;
        $this->type = $request->type;

        $this->price = new PublicPrice($this->activity, $this->adults, $this->minors, $this->season, $this->zone);

        $this->pricesCollection = collect($this->activity->prices);
        $this->setResolvedPrices();
        $this->totalPublicPrice = $this->calculatePublicTotal();
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

    public function getSummary(): mixed
    {
        return [
            'costPerAdult' => $this->resolvedPrices['adult']['amount'],
            'costPerMinor' => $this->resolvedPrices['minor']['amount'],
            'resolvedPrices' => $this->resolvedPrices,
            'string' => $this->activity,
            'totalPublicPrice' => $this->calculatePublicTotal(),
            'totalAgencyCost' => $this->applyDiscount()->getCost(),
        ];
    }

    public function getTotalPublicPrice()
    {
        return $this->totalPublicPrice;
    }

    public function calculatePublicTotal()
    {
        return $this->resolvedPrices['adult']['amount'] * $this->adults + $this->resolvedPrices['minor']['amount'] * $this->minors;
    }

    public function setResolvedPrices()
    {
        $this->resolvedPrices = [
            'adult' => $this->pricesCollection->where('type', 'adult')->where('season', $this->season)->where('zone_id', $this->zone)->first(),
            'minor' => $this->pricesCollection->where('type', 'kid')->where('season', $this->season)->where('zone_id', $this->zone)->first(),
        ];
    }

}