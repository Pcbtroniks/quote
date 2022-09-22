<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Post;

class Tag extends Model
{
    use HasFactory;

    protected $fillable =['title','slug','image','text'];
    
    public function posts()
    {
        $this->hasMany(Post::class);
    }
}
