<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CategoryController extends Controller
{
    public function get()
    {
        $userId = Auth::user()->id;

        $categories = Category::where('user_id', $userId)->get();

        return CategoryResource::collection($categories);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreCategoryRequest $request
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function store(StoreCategoryRequest $request)
    {
        $user = Auth::user();

        $user->categories()->create([
            'name' => $request->name
        ]);

        return CategoryResource::collection($user->categories);
    }
}
