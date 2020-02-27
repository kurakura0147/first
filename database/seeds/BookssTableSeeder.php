<?php

use Carbon\Carbon;

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;

class BookssTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $titles = ['テスト1', 'テスト2', 'テスト3'];

        foreach ($titles as $title) {
            DB::table('books')->insert([
                'title' => $title,
                'user_id' => 1,
            ]);
        }
    }
}
