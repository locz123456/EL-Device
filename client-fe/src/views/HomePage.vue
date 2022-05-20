<template>
  <v-content>
    <v-carousel hide-delimiters height="550" class="carousel">
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
        <v-row
          class="fill-height title"
          style="color: white"
          align="center"
          justify="center"
        >
          <router-link style="text-decoration: none; color: white" to="product">
            <div class="text-h2 loc">{{ item.title }}</div>
          </router-link>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <content-home />
    <!-- <div v-for="cus in customer" :key="cus.id">
      {{cus.customerName}}
    </div> -->
    <under />
  </v-content>
</template>

<script>
import Under from "../views/Under.vue";
import ContentHome from "../components/ContentHome.vue";
import axios from "axios";

export default {
  customer:{},
  components: { Under, ContentHome },
  // async created() {
  //   const res = axios
  //     .get("https://localhost:44371/api/Customer/GetCustomer?id=" + this.id, {
  //       headers: {
  //         Authorization: "Bearer" + localStorage.getItem("token"),
  //       },
  //     })
  //     .then((response) => {
  //       this.customer = response.data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
  data() {
    return {
      items: [
        {
          src: "https://expertvagabond.com/wp-content/uploads/best-travel-camera-guide-1.jpg",
          title: "Camera",
        },
        {
          src: "https://image.nghenhinvietnam.vn/w1024/Uploaded/2020/unvjohp/2020_01_10/sonudbar/vizio_elevate_2_kasw.jpg",
          title: "Soundbar",
        },
        {
          src: "https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fiphone.jpg&signature=10d280e47df1f5ab9fdfd31f4b412105",
          title: "Phone",
        },
      ],
    };
  },
};
</script>

<style>
</style>