<template>
        <div class="post" v-for="post in posts" :key="post.id">
            <div><strong>Ady:</strong>{{post.title}}</div>
            <div><strong>Opisaniye:</strong>{{post.body}}</div>
        </div>
</template>

<script>
export default {
    props:{
        posts:{
            type:Array,
            required:true
        }
    },
        data(){
            return{
                
            }
        }
    
}
</script>

<style scoped>
.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
}
</style>