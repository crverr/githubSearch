<template>
  <div class="container">
    <!-- Vuex讲解案例 -->
    <Count/>
    <Person/>

    <!-- github搜索案例 -->
    <Search/>
    <List/>
  </div>
</template>

<script>
import Search from './components/Search'
import List from './components/List.vue'
import Count from './components/Count'
import Person from './components/Person'
export default {
  name: 'App',
  components: {Search,List,Count,Person}
}
</script>
<style></style>
