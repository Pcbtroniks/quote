<?php

namespace App\Models\Quote;
use Illuminate\Support\Str;

class QuoteAdapter {

    public static function parse($request)
    {
        return [
            'uuid' => Str::uuid()->toString(),
            'user_id' => auth()->user()->id,
            'team_id' => auth()->user()->currentTeam->id,
            'national' => $request->nacionales,
            'season' => $request->season,
            'type' => $request->tipoReservacion,
            'holder_name' => $request->nombreTitular,
            'adults' => $request->adultos,
            'minors' => $request->menores,
            'infants' => $request->infantes,
            'observations' => $request->notas ?? '',
            'activity_id' => $request->actividad,
            'public_price' => $request->precioPublico,
            'sale_amount' => $request->importeVenta,
            'branch_id' => auth()->user()->branch_id,
        ];
    }

    public static function parseCosts($request)
    {
        $activityData = new \stdClass();
        $activityData->adults = $request->adultos;
        $activityData->minors = $request->menores;
        $activityData->infants = $request->infantes;
        $activityData->season = $request->season;
        $activityData->zone = $request->zona;
        $activityData->type = $request->tipoReservacion;
        $activityData->activity = $request->actividad;

        return $activityData;
    }

}