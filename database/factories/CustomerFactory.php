<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Customer>
 */
class CustomerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory()->create(),
            'nik' => "510".fake()->randomNumber(9),
            'phone' => fake()->phoneNumber(),
            'birthday' => fake()->date(),
            'gender' => 'male',
            'address' => fake()->address(),
            'occupation' => fake()->name()
        ];
    }
}
