<?php

namespace Database\Seeders;

use App\Models\Transaction;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Transaction::factory(10)->create();

        Transaction::create([
            'user_id' => 11,
            'amount' => 100,
            'type' => 1,
            'comment' => 'Test transaction',
            'account_id' => 1,
            'category_id' => 1
        ]);
    }
}
