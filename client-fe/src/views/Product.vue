<template>
  <div>
    <v-container class="mb-10" style="margin-top: 50px">
      <v-row>
        <v-icon left>mdi-magnify</v-icon>
        <v-col cols="12" md="4">
          <v-text-field v-model="search" label="search products"></v-text-field>
        </v-col>

        <v-spacer></v-spacer>

        <v-btn text class="mt-7">
          <v-icon color="blue" class="">mdi-menu</v-icon>
        </v-btn>
        <v-btn text class="mt-7">
          <v-icon color="blue">mdi-view-dashboard-outline</v-icon>
        </v-btn>
      </v-row>

      <v-row no-gutters>
        <v-col
          v-for="product in filteredProducts"
          :key="product.id"
          cols="12"
          sm="4"
          class="mb-10"
        >
          <v-card class="mx-auto my-5" max-width="350">
            <router-link
              style="text-decoration: none"
              v-bind:to="'/product-detail/' + product.id"
            >
              <img width="100%" height="250px" :src="product.image" />
              <v-card-title>{{ product.productName }}</v-card-title>

              <v-card-text>
                <div class="my-4" style="text-decoration: line-through; opacity:70%">
                  Old Price: ${{ product.originalPrice }}
                </div>
                <div class="my-4" style="font-size: 22px; color: black">
                  Price: ${{ product.price }}
                </div>
                <div
                  style="display: flex"
                  v-for="rank in ranks"
                  :key="rank.srat"
                >
                  <v-rating
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>
                  <div class="grey--text ms-2">{{ rank.vote }}</div>
                </div>
                <div style="color:black">{{ product.description }}</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-actions>
                <v-btn
                  style="width: 100%"
                  color="white"
                  text
                  class="mr-3 btnbuy"
                >
                  Buy
                </v-btn>
              </v-card-actions>
            </router-link>
          </v-card>
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
      products: [],
      search: "",
      ranks: [{ star: "4", vote: "(0)" }],

      // products: [
      //   {
      //     name: "Canon EOS M200 EF-M 15-45 BK",
      //     star: "4,5(20)",
      //     price: "1000$",
      //     saleprice:"500$",
      //     description: "Quay phim 4K mượt mà với chất lượng cao, tốc độ 24p, 25p, Công nghệ Wi-Fi và Bluetooth tích hợp đầy tiện ích",

      //     url: "https://cdn.nguyenkimmall.com/images/detailed/624/10044646-may-anh-canon-eos-m200-ef-m-15-45mm-den-1.jpg",
      //     route: "",
      //   },
      //   {
      //     name: "Soundbar JBL Bar 2.1 Deep Bass",
      //     star: "40(31)",
      //     price: "1000$",
      //     saleprice:"500$",
      //     description: "Quay phim 4K mượt mà với chất lượng cao, tốc độ 24p, 25p, Công nghệ Wi-Fi và Bluetooth tích hợp đầy tiện ích",
      //     url: "data:image/jpeg;base64,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",
      //     route: "",
      //   },
      //   {
      //     name: "SMART TIVI 4K 49 INCH LG",
      //     star: "4,2(28)",
      //     price: "1000$",
      //     saleprice:"500$",
      //     description: "Quay phim 4K mượt mà với chất lượng cao, tốc độ 24p, 25p, Công nghệ Wi-Fi và Bluetooth tích hợp đầy tiện ích",
      //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5veJu1PGg8HPHAPwK3JB-AKpgbb8iLNFgtA&usqp=CAU",
      //     route: "",
      //   },
      //   {
      //     name: "SamSung Z-Fold 3",
      //     star: "4,1(20)",
      //     price: "2000$",
      //     saleprice:"500$",
      //     description: "Quay phim 4K mượt mà với chất lượng cao, tốc độ 24p, 25p, Công nghệ Wi-Fi và Bluetooth tích hợp đầy tiện ích",
      //     url: "data:image/jpeg;base64,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",
      //     route: "",
      //   },
      //   {
      //     name: "Appel Watch Seari 7",
      //     star: "4,1(20)",
      //     price: "1000$",
      //     saleprice:"500$",
      //     description: "Quay phim 4K mượt mà với chất lượng cao, tốc độ 24p, 25p, Công nghệ Wi-Fi và Bluetooth tích hợp đầy tiện ích",
      //     url: "https://bizweb.dktcdn.net/thumb/grande/100/431/381/collections/apple-watch-series-7-41mm-2-3.png?v=1633071099457",
      //     route: "",
      //   },
      //   {
      //     name: "Microsoft – Surface 14'",
      //     star: "4,1(20)",
      //     price: "1000$",
      //     saleprice:"500$",
      //     description: "Quay phim 4K mượt mà với chất lượng cao, tốc độ 24p, 25p, Công nghệ Wi-Fi và Bluetooth tích hợp đầy tiện ích",
      //     url: "https://static.techspot.com/images/products/2021/laptops/org/2021-10-05-product-7.jpg",
      //     route: "",
      //   },
      // ],
    };
  },
  // methods:{
  //   addToCart(){
  //     this.$store.commit('addToCart', this.item)
  //   }
  // },
  computed: {
    filteredProducts: function () {
      return this.products.filter((product) => {
        return product.productName.match(this.search);
      });
    },
  },
  created() {
    axios
      .get("https://localhost:44371/api/Product/GetAllProduct")
      .then((response) => {
        this.products = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
.btnbuy {
  background-color: rgb(44, 144, 211);
}
</style>