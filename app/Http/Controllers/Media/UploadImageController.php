<?php

namespace App\Http\Controllers\Media;

use App\Http\Controllers\Controller;
use App\Models\Team;
use App\Services\Media\DestroyImageService;
use App\Services\Media\UploadImageService;
use Illuminate\Http\Request;

class UploadImageController extends Controller
{
    public function uploadTeamLogo(Request $request)
    {
        $filePath = UploadImageService::FromRequest($request, 'image', 'teams');
        if ($filePath) {

            $team = Team::find(auth()->user()->currentTeam->id);

            DestroyImageService::FromPath($team->logo);

            $team->update(['logo' => $filePath]);

            return redirect()->back()->with('success', 'Image Uploaded Successfully');
        }
        return redirect()->back()->with('error', 'Image Upload Failed');
    }

    public function resetTeamLogo(Request $request)
    {
        $team = Team::find(auth()->user()->currentTeam->id);
        if(DestroyImageService::FromPath($team->logo) ) {
            $defaultLogo = '\\assets\\exploreemotions-logo.png';
            $team->update(['logo' => $defaultLogo]);
        } else {
            return redirect()->back()->with('error', 'Image Delete Failed');
        }
        return redirect()->back()->with('success', 'Image Deleted Successfully');
    }
}
