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
            'userId' => 11,
            'amount' => 100,
            'type' => 1,
            'comment' => 'Test transaction',
            'accountId' => 1,
            'categoryId' => 1
        ]);
    }
}
