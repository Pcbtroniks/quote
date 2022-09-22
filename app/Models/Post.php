<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\Tag;

class Post extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'slug', 'date', 'image', 'text', 'description', 'posted', 'type', 'category_id'];
    use HasFactory;

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggables');
    }
}
