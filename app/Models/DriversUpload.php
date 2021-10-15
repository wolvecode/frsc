<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 *
 */
class DriversUpload extends Model
{
    use HasFactory;


    /**
     * @var string[]
     */
    protected $fillable = [
        'driver_id',
        'passport',
        'right_thumb',
        'left_thumb',
    ];
}
