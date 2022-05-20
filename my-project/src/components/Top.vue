<template>
  <v-app-bar app elevation="3" color="primary" dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <!-- <v-btn text>Hire me</v-btn>
      <v-btn text>Blog</v-btn>
      <v-btn text>Doc</v-btn> -->
    </v-toolbar-items>
    <v-badge left color="red" content="4" offset-y="10" offset-x="10">
      <v-icon>mdi-bell</v-icon>
    </v-badge>
  </v-app-bar>
</template>

<script>
export default {
  name: "Top",
};
</script>

<style>
</style>
