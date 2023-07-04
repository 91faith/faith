<template>
    <div :class="[type,'custom-block']">
        <p v-if="title" class="custom-block-title"> {{ title }}</p>
        <p v-if="content" >{{content}}</p>
    </div>
</template>
<script>
export default{
    props:{
        type:{
            default:'tip',
        },
        title:{
            default:'',
        },
        content:{
            default:''
        }
    }
}
</script>
<style scoped>
.custom-block.tip{
    background-color: #f3f5f7;
    border-color: #42b983;
}
.custom-block.warning{
    background-color: rgba(255,229,100,.3);
    border-color: #e7c000;
    color: #6b5900;
}
.custom-block.danger{
    background-color: #ffe6e6;
    border-color: #c00;
    color: #4d0000;
}
.custom-block-title{
    font-weight: 600;
    margin-bottom: -0.4rem;
}
.custom-block.danger, .custom-block.tip, .custom-block.warning{
    padding: 0.1rem 1.5rem;
    border-left-width: 0.5rem;
    border-left-style: solid;
    margin: 1rem 0;
}
.custom-block .custom-block-title{
    font-weight: 600;
    margin-bottom: -0.4rem;
    
}
.dark .custom-block.tip{
    background-color: #393941;
    border-color: #42b983;
}
.dark .custom-block.warning{
    background-color: #393941;
    border-color: #e7c000;
    color: #6b5900;
}
.dark .custom-block.danger{
    background-color: #393941;
    border-color: #c00;
    color: #4d0000;
}
p{
        line-height: 1.7;
}
</style>