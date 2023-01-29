<?php

namespace Database\Seeders;

use App\Models\Account;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Account::factory(5)->create();

        Account::create([
            'user_id' => 11,
            'name' => 'Dollars',
            'currency_id' => 1,
            'amount' => '1000',
            'start_amount' => '1000'
        ]);

        Account::create([
            'user_id' => 11,
            'name' => 'Rubles',
            'currency_id' => 5,
            'amount' => '100000',
            'start_amount' => '100000'
        ]);

        Account::create([
            'user_id' => 11,
            'name' => 'Euro',
            'currency_id' => 2,
            'amount' => '7500',
            'start_amount' => '7500'
        ]);

        Account::create([
            'user_id' => 11,
            'name' => 'Brazil Reals',
            'currency_id' => 4,
            'amount' => '1500',
            'start_amount' => '1500'
        ]);
    }
}
