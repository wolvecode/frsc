<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 *
 */
class DriversContact extends Model
{
    use HasFactory;


    /**
     * @var string[]
     */
    protected $fillable = [
        'driver_id',
        'address_1',
        'city',
        'lga',
        'state',
        'postal_code',
        'address_1',
        'city_2',
        'lga_2',
        'state_2',
        'postal_code_2',
    ];

    public function driver()
    {
        $this->belongsTo(Driver::class, 'driver_id', 'id');
    }

    public function offense()
    {
        return $this->hasMany(Offense::class);
    }
}
