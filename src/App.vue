<template>
    <div class="app">
            <post-form  @create="createPost"/>
            <post-list :posts="posts"/>
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue'
    export default {
        components:{
            PostForm,
            PostList
        },
        data(){
            return {
                posts: [
                    {id:1, title:'Javascript', body:'Opisaniye posta'},
                    {id:2, title:'Javascript2', body:'Opisaniye posta1'},
                    {id:3, title:'Javascript3', body:'Opisaniye posta2'},
                ],

            }
        },
        methods: {
        createPost(post){

            }
        },
    }
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.app{
    padding: 20px;
}



</style>