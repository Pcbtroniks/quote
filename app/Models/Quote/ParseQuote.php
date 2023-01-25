<?php

namespace App\Models\Quote;
use Illuminate\Support\Str;

class ParseQuote {

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
        ];
    }

}