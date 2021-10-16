<?php

namespace App\Models;

use DarkGhostHunter\Larapass\Contracts\WebAuthnAuthenticatable;
use DarkGhostHunter\Larapass\WebAuthnAuthentication;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use PhpParser\Node\Expr\AssignOp\Mod;

/**
 *
 */
class Driver extends  Model
{
    use HasFactory;


    /**
     * @var string[]
     */
    protected $fillable = [
        'surname',
        'firstname',
        'lastname',
        'email',
        'phone',
        'gender',
        'nationality',
        'state',
        'lga',
        'birth',
        'nin',
    ];

    public function contact()
    {
        return $this->hasOne(DriversContact::class);
    }

    public function offenses()
    {
        return $this->hasMany(Offense::class, 'driver_id', 'id');
    }

    public function upload()
    {
        return $this->hasOne(DriversUpload::class, 'driver_id','id');
    }

    public function picture()
    {
        return $this->hasOne(DriversUpload::class, 'driver_id', 'id');
    }
}
