<template>
  <div>
    <div>
      <div class="main" >
        <h1>Shopping cart</h1>
        <h2 class="sub-heading">Free shipping from $100!</h2>
      </div>
      <v-container>
        <div v-for="item in cart" :key="item.id">
          <v-row class="row-cart" clos="12">
            <v-col cols="2">
              <img :src="item.image" alt="" width="100% " height="150px" />
            </v-col>
            <v-col class="col2" cols="6">
              <h3>{{ item.productName }}</h3>
            </v-col>
            <v-col class="col3" cols="2">
              <p>{{ quantily }}</p>
              <h2>${{ item.price }}</h2>
            </v-col>
            <v-col class="col4" cols="2">
              <button
                class="btn-cart"
                @click="$store.commit('removeToCart', item)"
              >
                X
              </button>
            </v-col>
            <div></div>
          </v-row>
        </div>
      </v-container>
      <!-- <div class="container ny-5" style="text-align: center" >
        <img
          src="https://rtworkspace.com/wp-content/plugins/rtworkspace-ecommerce-wp-plugin/assets/img/empty-cart.png"
          alt=""
          width="900px"
        />
      </div> -->
    </div>

    <!-- <empty-cart /> -->
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },

    quantily() {
      return this.$store.state.quantily;
    },
  },
};
</script>

<style>
[class*="entypo-"]:before {
  font-family: "entypo", sans-serif;
}
body {
  background-color: #ecf0f1;
  font: 300 1.25em/1.4 "Lato", sans-serif;
  color: #686868;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
}
h1,
.sub-heading {
  text-align: center;
  margin: 0.5rem 0 1rem;
}
.sub-heading {
  font-size: 0.75em;
  font-weight: 300;
}
.row-cart {
  margin-top: 20px;
  border: 1px solid rgb(180, 180, 180);
  border-radius: 2px;
}
.col2 {
  display: flex;
  justify-content: center;
  color: rgb(56, 56, 56);
}
.col3 {
  display: flex;
  justify-content: center;
  border-left: 1px solid rgb(180, 180, 180);
  color: rgb(56, 56, 56);
}
.col3 > h2 {
  margin-top: 100px;
}
.col4 {
  align-items: center;
  background-color: rgb(243, 29, 29);
  display: flex;
  justify-content: center;
  color: rgb(255, 255, 255);

  position: static;
}
.col4:hover {
  background-color: brown;
}
.btn-cart {
  width: 100%;
  height: 100%;
  border: none;
}
</style>