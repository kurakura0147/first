<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Menu List</div>
                    <div class="card-body">
                        <div v-if="msg === 0">{{MenuName}}</div>
                        <div v-if="msg === 1">{{MenuName}}</div>
                        <div v-if="msg === 2">{{MenuName}}</div>
                        <div v-if="msg === 3">{{MenuName}}</div>
                        <ul v-show="msg === '何をしますか？'">
                            <li v-for="(item, index) in items" :key="index" @click.prevent="msg = index, MenuName = item.name">
                                <a href="/">{{ item.name }}</a>
                            </li>
                        </ul>
                        <a href="#" @click.prevent="msg='何をしますか？'">back</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            msg: "何をしますか？",
            MenuName: "",
            items: [
                // ユーザー詳細から編集できるようにする
                {name: "ユーザー情報詳細"},
                // 入力時にリアルタイム表示。確認画面の表示
                {name: "新規投稿"},
                // ログインユーザーで絞り込み一覧表示
                {name: "投稿内容確認"},
                // 投稿内容から詳細画面に飛ばす
                {name: "他ユーザー投稿確認"},
            ],
        }
    },

    methods: {
        // huhu: function(){
        //     this.msg = "クリックした"
        // }
    }
}
</script>
