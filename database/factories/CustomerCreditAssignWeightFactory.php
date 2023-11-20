<?php

namespace Database\Factories;

use App\Models\Criteria;
use App\Models\CustomerCredit;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CustomerCreditAssignWeight>
 */
class CustomerCreditAssignWeightFactory extends Factory
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
            'customer_credit_id' => CustomerCredit::factory()->create(),
            'value' => fake()->numberBetween(1, 5)
        ];
    }
}
