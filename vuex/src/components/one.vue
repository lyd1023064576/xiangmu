<template>
    <div>
        了解hi打扫
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    mounted(){
       console.log(this.$store.state.user.token)
    }
}
</script>
<style lang="" scoped>
    
</style>