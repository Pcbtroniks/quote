<?php

namespace App\Traits;

use Carbon\Carbon;

trait Dateable {

    /**
     * Provides a convenient local date format "vie. 25 de noviembre 2022"
     * 
     * @return string
     */
    public function toLocaleDateStringES ($date){ 

        return Carbon::parse($date)->locale('es-MX')->translatedFormat('D j \\de F Y');
    
    }

}