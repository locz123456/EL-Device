<template>
  <div>
    <v-container>
      <v-row cols="12" class="row" style="margin-top: 100px">
        <v-col cols="7">
          <img class="img" :src="product.image" alt="" />
        </v-col>
        <v-col cols="5" class="infor">
          <h3>{{ product.productName }}</h3>
          <div class="my-4" style="text-decoration: line-through">
            Old Price: ${{ product.originalPrice }}
          </div>
          <div class="my-4" style="font-size: 22px; color: black">
            Price: ${{ product.price }}
          </div>
          <div style="display: flex" v-for="rank in ranks" :key="rank.srat">
            <v-rating
              :value="rank.star"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
            <div class="grey--text ms-2">{{ rank.vote }}</div>
          </div>
          <div class="gift">
            <div class="Coupons">
              <v-icon color="red">mdi-gift-open</v-icon>
              <p>1 Coupons -20% Laptop MSI</p>
            </div>
            <div class="Coupons">
              <v-icon color="red">mdi-gift-open</v-icon>
              <p>1 Keyboard Razer</p>
            </div>
            <div class="Coupons">
              <v-icon color="red">mdi-gift-open</v-icon>
              <p>1 Coupons -5% Discount on next purchase</p>
            </div>
          </div>
          <v-card-actions class="mt-7">
            <v-spacer></v-spacer>
            <v-btn
              class="btnbuy ml-2"
              color="white"
              text
              @click="addToCart(product)"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <router-link to="/cart"
              tag="btn"
              class="ml-2">
              <v-btn color="white" text @click="reserve" class="mr-3 btnbuy">
                Buy
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
    <under style="margin-top: 100px" />
  </div>
</template>

<script>

import axios from "axios";
import Under from "../views/Under.vue";
export default {
  components: { Under },

  data() {
    return {
      id: this.$route.params.id,
      product: {},
      ranks: [{ star: "4.2", vote: "(125)" }],
    };
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product);
    },
  },
  created() {
    axios
      .get("https://localhost:44371/api/Product/GetProduct?id=" + this.id)
      .then((response) => {
        this.product = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
.img {
  width: 100%;
  border: 1px solid rgb(170, 170, 170);
  border-radius: 20px;
  height: 500px;
}
.infor {
  background-color: rgb(238, 238, 238);
  border: 10px solid rgb(194, 194, 194);
  border-radius: 20px;
}
.gift {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid rgb(123, 44, 197);
  border-radius: 20px;
}
.gift .Coupons {
  display: flex;
}
.gift .Coupons p {
  margin-left: 10px;
  margin-top: 15px;
}
</style>