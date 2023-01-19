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
            'userId' => 11,
            'name' => 'Dollars',
            'currencyId' => 1,
            'amount' => '1000',
            'startAmount' => '1000'
        ]);

        Account::create([
            'userId' => 11,
            'name' => 'Rubles',
            'currencyId' => 5,
            'amount' => '100000',
            'startAmount' => '100000'
        ]);

        Account::create([
            'userId' => 11,
            'name' => 'Euro',
            'currencyId' => 2,
            'amount' => '7500',
            'startAmount' => '7500'
        ]);

        Account::create([
            'userId' => 11,
            'name' => 'Brazil Reals',
            'currencyId' => 4,
            'amount' => '1500',
            'startAmount' => '1500'
        ]);
    }
}
