<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Book;

class BookController extends Controller
{
    public function __construct()
    {
        // 認証が必要
        $this->middleware('auth');
    }

    public function index()
    {
        $books = Book::all();
        return $books;
    }

    public function create(Request $request)
    {
        $book = new Book();
        $book->title = $request->title;
        $book->user_id = 1;
        $book->save();
    }

}
