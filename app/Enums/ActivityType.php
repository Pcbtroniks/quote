<?php

namespace App\Enums;

enum ActivityType: string {
    case Park = 'park';
    case Tour = 'tour';

    public function getType()
    {
        return $this->value;
    }
}