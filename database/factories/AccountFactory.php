<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Account>
 */
class AccountFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id'      => fake()->numberBetween(1, 10),
            'name'        => fake()->word(),
            'currency_id'  => fake()->numberBetween(1, 4),
            'amount'      => fake()->numberBetween(-200, 10000),
            'start_amount' => fake()->numberBetween(0, 10000),
            'type'        => fake()->numberBetween(1, 2)
        ];
    }
}
