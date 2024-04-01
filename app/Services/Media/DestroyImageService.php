<?php

namespace App\Services\Media;

class DestroyImageService
{
    public static function FromPath($path)
    {
        if (file_exists(public_path('storage/' . $path))) {
            unlink(public_path('storage/' . $path));
            return true;
        }

        return false;
    }
}