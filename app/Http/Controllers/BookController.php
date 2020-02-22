<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BookController extends Controller
{
    public function __construct()
    {
        // 認証が必要
        $this->middleware('auth');
    }

    public function index()
    {
        // $books = [
        //     "name" => "練習用",
        // ];
        $books = "れんしゅうです";
        return "れんゆうよい";
    }
}
