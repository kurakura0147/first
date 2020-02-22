<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index()
    {
        // $books = [
        //     "name" => "練習用",
        // ];
        $books = "れんしゅうです";
        return $books;
    }
}
