<template>
  <div class="hello">
     <h1 @click="dian">啊哈哈哈哈哈asdd</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '全文及金额大窘',
    }
  },
  mounted(){
    this.msg='这是存储的user值'
    this.$store.commit('SET_TOKEN',this.msg)
  },
  methods:{
    dian(){
      this.$router.push({path: '/one'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
