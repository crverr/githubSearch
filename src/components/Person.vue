<template>
  <div>
    <hr>
    <h1>人员列表</h1>
    <h3 style="color:red">Count组件求和为： {{ sum }}</h3>
    <h3>列表中第一个人的名字是: {{ firstPersonName }}</h3>
    <input type="text" placeholder="请输入" v-model="name">
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addRandom">随机添加一个人</button>
    <br><br>
    <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
       
    </ul>
  </div>
</template>

<script>
import {mapState, mapGetters,mapMutations,mapActions} from 'vuex'
import {nanoid} from 'nanoid'
export default {
  name: 'Person',
  components: {},
  props: {},
  data() {
    return {
        name: ''
    };
  },
  computed:{
    //直接读取的方法
    personList() { return this.$store.state.personAbout.personList },
    sum() { return this.$store.state.countAbout.sum },
    firstPersonName() { return this.$store.getters['personAbout/firstPersonName'] }
  },
  methods: {
    add() {
        if(this.name === '') return 
        const personObj = {id: nanoid(), name: this.name}
        this.$store.commit('personAbout/addPerson', personObj)
        this.name = ''
    },
    addWang() {
        if(this.name === '') return 
        const personObj = {id: nanoid(), name: this.name}
        this.$store.dispatch('personAbout/addPersonWang', personObj)
        this.name = ''
    },
    addRandom() {
        this.$store.dispatch('personAbout/addPersonServer')
    }
  }
};
</script>
<style scoped>
</style>