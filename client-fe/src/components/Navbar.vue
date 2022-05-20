<template>
  <nav >
    <!-- <v-toolbar flat app elevation="5" gray>
      <v-toolbar-title
        class="text-uppercase grey--text"
        style="margin-left: 30px"
      >
        <v-icon color="blue">mdi-electron-framework</v-icon>
        <span class="font-weight-dark">Electronic</span>
        <span class="black--text">Device</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <content style="margin-right: 30px">
        <v-btn text @click="showLogin">
          <span>Home</span>
        </v-btn>
        <v-btn text>
          <span>Products</span>
        </v-btn>
        <v-btn text>
          <span>Contact</span>
        </v-btn>
        <span style="margin-left: 20px">
          <v-btn text >
            <v-icon dense>mdi-account</v-icon>
          </v-btn>
          <v-btn text>
            <v-icon dense>mdi-magnify</v-icon>
          </v-btn>
          <v-btn text>
            <v-icon dense>mdi-cart</v-icon>
            
          </v-btn>
        </span>
      </content>
    </v-toolbar> -->
    <v-container fluid fixed class="navbar">
      <v-tabs color="" slider-color="blue">
        <v-toolbar-title
          class="text-uppercase grey--text logo"
          style="margin-left: 30px"
        >
          <v-icon color="blue" style="font-size: 40px"
            >mdi-electron-framework</v-icon
          >
          <span class="font-weight-dark">Electronic</span>
          <span class="blue--text">Device</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        
        <v-tab class="top" ripple v-for="link in links" :key="link.text" router :to="link.route"> {{link.text}} </v-tab>
        <v-tab class="top" ripple v-for="icon in icons" :key="icon.icon" router :to="icon.route"> <v-icon>{{icon.icon}}</v-icon> </v-tab>
        
        <router-link to="/cart" tag="v-tab">
          <v-tab class="top" ripple> <v-icon>mdi-cart </v-icon> </v-tab>
          
        </router-link>
        

      </v-tabs>
    </v-container>
  </nav>
</template>

<script>
export default {
  
  data() {
    return {
      links: [
        { text: "Home", route: "/" },
        { text: "Products", route: "/product" },
        { text: "Contact", route: "/contact" },
        
      ],
      icons:[
        { icon: "mdi-account", route: "/login"},
        
      ]
    };
  },
  
};
</script>

<style>
.v-tabs:not(.v-tabs--vertical) .v-tab {
    white-space: normal;
    text-decoration: none;
}
.logo {
  margin-top: 8px;
  font-size: 25px;
}

</style>