<?php

namespace App\Enums;

enum Zone: int {
    case Invalid = 0;
    case Cancun = 1;
    case RivieraMaya = 2;
    case PlayaDelCarmen = 3;
    case Nacional = 4;
    case Internacional = 5;

    public function getID() 
    {
        return $this->value;
    }

    public function getAlias()
    {
        $aliases = ['invalid','c', 'rm', 'pdc', 'national', 'international'];
        return $aliases[$this->value];
    }
}