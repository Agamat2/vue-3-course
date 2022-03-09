<template>
<div>
    <h3>Spisok polzowateley</h3>
    <post-item v-for="post in posts" :post="post" :key="post.id"/>
</div>

</template>

<script>
import PostItem from '@/components/PostItem';
export default {
    components:{
        PostItem
    },
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

</style>