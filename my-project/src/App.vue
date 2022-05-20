<template>
  <v-app>
    <sidebar/>
    <top/>
    <v-main style="background: #f5f5f540">
      <div class="py-3 px-6">
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Top from './components/Top.vue'
export default {
  components: { Sidebar, Top },
  name: 'App'
}
</script>

<style>

</style>
