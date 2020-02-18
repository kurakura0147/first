<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Menu List</div>
                    <div class="card-body">
                        <p v-show="msg === 0">item-list1です</p>
                        <p v-show="msg === 1">item-list2です</p>
                        <p v-show="msg === 2">item-list3です</p>
                        <p v-show="msg === 3">item-list4です</p>
                        <ul>
                            <li v-for="(item, index) in items" :key="index" @click="msg = index">
                                {{ item.name }}
                            </li>
                        </ul>
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
            items: [
                {name: "item-list1"},
                {name: "item-list2"},
                {name: "item-list3"},
                {name: "item-list4"},
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
