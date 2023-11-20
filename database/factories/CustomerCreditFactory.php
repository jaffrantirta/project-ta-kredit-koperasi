<?php

namespace Database\Factories;

use App\Models\Customer;
use App\Models\Status;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CustomerCredit>
 */
class CustomerCreditFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'purpose' => fake()->name(),
            'customer_id' => Customer::factory()->create(),
            'status_id' => Status::factory()->create(),
        ];
    }
}
