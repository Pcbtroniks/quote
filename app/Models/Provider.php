<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Provider extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'rfc',
        'status'
    ];

    public function invoices() {
     
        return $this->hasMany(Invoice::class);
     
    }
}
