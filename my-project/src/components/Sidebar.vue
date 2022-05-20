<template>
  <v-navigation-drawer app>
    <v-toolbar color="primary darken-1" dark>
      <v-icon large color="white darken-2" class="mr-2">
        mdi-electron-framework
      </v-icon>
      <v-toolbar-title>
        <span>Electronic Device</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list>
      <v-list-item v-for="link in links" :key="link.icon" link :to="link.route">
        <v-list-item-icon>
          <v-icon> {{ link.icon }} </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            {{ link.text }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      links: [
        {icon:"mdi-view-dashboard", text:"Home", route:"/"} ,
        {icon:"mdi-account-multiple", text:"Customers", route:"/customer"} ,
        {icon:"mdi-devices", text:"Products", route:"/products"} ,
        {icon:"mdi-shape", text:"Category", route:"/category"} ,
        {icon:"mdi-spider-web", text:"Supplier", route:"/supplier"} ,
        
      ],
    };
  },
};
</script>

<style>
</style>