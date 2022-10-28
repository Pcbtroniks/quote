<?php

namespace App\Repositories\Quotes;

use App\Models\Activity;
use App\Models\Coupon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

use App\Models\Quote as ModelsQuote;
use App\Models\QuoteActivity;

class Quote {

    public function getParks(){

        return Activity::where('type', 'park')->get();
    
    }

    public function getTours(){

        return Activity::where('type', 'tour')->get();
    
    }

    public function previewEntrance($id){

        $quote =  ModelsQuote::where('id', $id)
                            ->with(['user','coupon', 'listed_activity'])
                            ->first();
        $quote->load('listed_activities');

        $quote->activity = Activity::findOrFail($quote->listed_activity->id) ?? '';
        return $quote;
    }

    public function save(Request $request){

        $coupon = Coupon::create([
            'code' => '',
            'public_price' => $request->precioPublico,
            'agency_price' => $request->importeVenta,
            'paid_status' => 'none',
        ]);

        Coupon::where('id', $coupon->id)
                ->update(['code' => 'TIM' . str_pad( $coupon->id , 5, '0', STR_PAD_LEFT)]);

        $data = [
            'user_id' => auth()->user()->id,
            'activity_id' => $request->parque,
            'coupon_id' => $coupon->id,
            'uuid' => Str::uuid()->toString(),
            'season' => $request->season,
            'national' => $request->nacionales,
            'quote_type' => $request->tipoReservacion,
            'activity_date' => $request->fechaActividad,
            'holder_name' => $request->nombreTitular,
            'adults' => $request->adultos,
            'minors' => $request->menores,
            'infants' => $request->infantes,
            'notes' => $request->notas ?? '',
            'status' => 'created',

        ];

        $quote = ModelsQuote::create( $data );
        
        $activities = QuoteActivity::create([
            'quote_id' => $quote->id,
            'activity_id' => $data['activity_id'],
        ]);

        return $quote;
    }

}