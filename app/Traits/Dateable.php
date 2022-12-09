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
    /**
     * Provides a convenient local date format for manifest "25-nov"
     * 
     * @return string
     */
    public function toManifestDateString ($date){ 

        return Carbon::parse($date)->locale('es-MX')->translatedFormat('d-M');
    
    }

}