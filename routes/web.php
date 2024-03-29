<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/categories', function () {
    return Inertia::render('Categories');
})->middleware(['auth', 'verified'])->name('categories');

Route::get('/transactions', function () {
    return Inertia::render('Transactions');
})->middleware(['auth', 'verified'])->name('transactions');

Route::get('/accounts', function () {
    return Inertia::render('Accounts');
})->middleware(['auth', 'verified'])->name('accounts');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/categories/list', [CategoryController::class, 'get'])->name('categories.list');
    Route::post('/categories/store', [CategoryController::class, 'store'])->name('categories.store');

    Route::get('/transactions/list', [TransactionController::class, 'get'])->name('transactions.list');
    Route::post('/transactions/store', [TransactionController::class, 'store'])->name('transactions.store');

    Route::get('/accounts/list', [AccountController::class, 'get'])->name('accounts.list');
    Route::post('/accounts/store', [AccountController::class, 'store'])->name('accounts.store');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
