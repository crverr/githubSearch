<template>
  <div class="hello">
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍：{{bigSum}}</h3>
    <h3>姓名：{{ name }}，性别: {{ sex }}</h3>
    <h3 style="color:red">Person组件的总人数是: {{ personList.length }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations, mapActions} from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      n: 1
    }
  },
  computed: {
    //借助mapSate和mapGetters生成计算属性
    ...mapState('countAbout',['sum','name','sex']),
    ...mapState('personAbout', ['personList']),
    ...mapGetters('countAbout',['bigSum'])
  },
  methods: {
    ...mapMutations('countAbout',{increment: 'add', decrement: 'reduce'}),
    ...mapActions('countAbout',{incrementOdd:'asyncAddOdd', incrementWait:'asyncAddWait'})
    // increment() {
    //   //使用mutaion减
    //   this.$store.commit('add', this.n)
    // },
    // decrement() {
    //   //使用mutaion减
    //   this.$store.commit('reduce')
    // },
    // incrementOdd() {
    //   //使用Actions异步
    //   this.$store.dispatch('asyncAddOdd', this.n)
    // },
    // incrementWait() {
    //   this.$store.dispatch('asyncAddWait', this.n)
    // }
  }
}
</script>
<style scoped></style>
