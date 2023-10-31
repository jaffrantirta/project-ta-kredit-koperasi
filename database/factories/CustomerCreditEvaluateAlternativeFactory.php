<?php

namespace Database\Factories;

use App\Models\Criteria;
use App\Models\Customer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CustomerCreditEvaluateAlternative>
 */
class CustomerCreditEvaluateAlternativeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'criteria_id' => Criteria::factory()->create(),
            'customer_id' => Customer::factory()->create(),
            'value' => fake()->numberBetween(1, 5)
        ];
    }
}
