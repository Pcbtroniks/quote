<?php

namespace App\Interfaces;

interface PriceInterface
{
    public function getActivity();

    public function getDescription();
    
    public function getDiscounts();
    
    public function getCost();
    
    public function getCosts();
}