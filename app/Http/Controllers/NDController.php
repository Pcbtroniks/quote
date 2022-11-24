<?php

namespace App\Http\Controllers;

use App\Models\Coupon;
use App\Models\Quote;
use App\Models\QuoteActivity;
use App\Models\Team as TeamModel;
use App\Models\User;
use App\Models\Zone as ModelsZone;
use App\Repositories\Activities\Pickup;
use App\Repositories\Prices\Price;
use App\Repositories\Quotes\Quote as QuotesQuote;
use App\Repositories\Teams\Team;
use App\Repositories\Zones\Zone;
use Illuminate\Support\Str;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use stdClass;

class NDController extends Controller
{
    public function index(){
        return range('A', 'C');
        return response()->json(['message' => Str::uuid()->toString()]);
    }

    public function users(User $user,TeamModel $team){
        dd(User::first(['id']));
        dd(auth()->user()->id);
        return $user->teams;
    }

    public function teams(){
        dd(User::first(['id'])->id);
        return Team::getPublicTeam();
    }

    public function newQuoteMail(){
        $quote = Quote::first();
        return view('Emails.Quotes.new-quote', compact('quote'));
    }

    public function pickups( Pickup $pickup , $activity = 1, $hotel = 1)
    {
        $return = $pickup->getOrNull( $activity , $hotel);

        return $return ?? false;
    }

    public function quote(){
        $d = Quote::find(3);
        // $user = User::first();
        // return $user->currentTeam;

        dd($d->user->teamRole($d->user->currentTeam)->name);
        return $d->user->currentTeam->name;
        // return Quote::find(3)->listed_activity[0]->activities->count();
    }

    public function quoteuuid($uuid){
        return Quote::where('uuid', $uuid)->first();
    }

    public function activity(){
        return QuoteActivity::find(2)->activities;
    }

    public function zones(){
        return ModelsZone::all();
    }

    public function price(){
        return (new Price)->getParkPrice(1, 4, 'low');
    }
}
