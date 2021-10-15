<?php

namespace Database\Factories;

use App\Models\Driver;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DriverFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Driver::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'surname' => $this->faker->firstName,
            'firstname' => $this->faker->lastName,
            'lastname' => $this->faker->lastName,
            'email' => $this->faker->unique->email,
            'phone' => $this->faker->phoneNumber,
            'gender' => $this->faker->randomElement(['M', 'F']),
            'nationality' => $this->faker->country,
            'state' => $this->faker->city,
            'lga' => 'lga',
            'birth' => $this->faker->date,
            'nin' => rand(1,10000000000)
        ];
    }
}
