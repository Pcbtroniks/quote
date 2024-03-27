<?php

namespace App\Http\Controllers\Media;

use App\Http\Controllers\Controller;
use App\Models\Team;
use Illuminate\Http\Request;

class UploadImageController extends Controller
{
    public function uploadTeamLogo(Request $request)
    {
        $request->validate([
            'image' => 'required|image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            dd($request->file('image'));
            $filename = time() . '-' . $request->file('image')->getClientOriginalName();
            $filePath = $request['image']->storeAs('teams', $filename, 'public');
            $team = Team::find(auth()->user()->currentTeam->id);
            $team->logo = $filePath;
            $team->save();

            // Puedes devolver la información de la imagen o lo que necesites
            return response()->json(['success' => 'Image Uploaded Successfully', 'image_path' => $filePath]);
        }

        return response()->json(['error' => 'Image Upload Failed'], 500);
    }
}
