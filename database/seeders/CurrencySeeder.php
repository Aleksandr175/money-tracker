<?php

namespace Database\Seeders;

use App\Models\Currency;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Currency::create([
            'name' => 'USD',
            'symbol' => '$'
        ]);

        Currency::create([
            'name' => 'EURO',
            'symbol' => '€'
        ]);

        Currency::create([
            'name' => 'Serbian Dinar',
            'symbol' => 'RSD'
        ]);

        Currency::create([
            'name' => 'Brazilian Real',
            'symbol' => 'R$'
        ]);

        Currency::create([
            'name' => 'Russian Ruble',
            'symbol' => 'RUB'
        ]);
    }
}
