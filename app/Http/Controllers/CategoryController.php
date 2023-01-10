<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CategoryController extends Controller
{
    public function get()
    {
        $userId = Auth::user()->id;

        $categories = Category::where('userId', $userId)->get();

        return CategoryResource::collection($categories);
    }
}
