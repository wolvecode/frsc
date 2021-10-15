<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offense extends Model
{
    use HasFactory;


    protected $fillable = [
        'driver_id',
        'offense',
        'code',
        'paid',
        'location',
        'category',
        'penalty',
    ];

    public function driver()
    {
        return $this->belongsTo(Driver::class);
    }
}
