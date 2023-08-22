<?php

namespace App\Repositories\Quotes;

use App\Models\Quote as QuoteModel;

class GetQuotes {

    /**
     * Get the quotes
     * 
     * 
     * 
     * @param \Illuminate\Http\Request $request
     * @param bool $isFreetravelerAdmin
     * @param int $limit
     */
    public function get($request, $isFreetravelerAdmin = false, int $limit = 10)
    {
        return QuoteModel::when( !$isFreetravelerAdmin , function ($q) use ($request)
        {
            $q->where('team_id', auth()->user()->currentTeam->id);
        })
        ->when($request->date, function ($q) use ($request){
            $q->whereHas('listed_activities', function ($q) use($request) {
                $q->where('date', $request->date);
            });
        })
        ->when($request->type, function ($q) use ($request){
            $q->where('type', $request->type);
        })
        ->when($request->filter_agency, function ($q) use ($request){
                $q->where('team_id', $request->filter_agency);
        })
        ->when($request->zone, function ($q) use ($request){
            $q->whereHas('listed_activities.hotel.zone', function ($q) use($request) {
                $q->whereId($request->zone);
            });
        })
        ->where('created_at', '>', '2023-06-14')
        ->with([
        'user', 
        'coupon', 
        'listed_activities', 
        'listed_activities.activity', 
        'team', 
        'listed_activities.hotel', 
        'listed_activities.hotel.zone'])
        ->paginate($limit)
        ->onEachSide(0);
    }

}