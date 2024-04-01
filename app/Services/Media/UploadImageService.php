<?php

namespace App\Services\Media;

class UploadImageService
{
    public static function FromRequest($request, $filename = 'image', $filePath = 'images')
    {
        $request->validate([
            'image' => 'required|image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $filename = time() . '-' . $request->file('image')->getClientOriginalName();
            $filePath = $request['image']->storeAs($filePath, $filename, 'public');

            return $filePath;
        }

        return false;
    }
}