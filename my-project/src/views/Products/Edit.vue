<template>
  <v-dialog v-model="dialog" max-width="640px">
    <v-card flat tile>
      <v-card-title class="primary headline">
        <span style="color: white">Update Product</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="data.productName"
                  label="Product Name"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="data.price" label="Price">
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="data.originalPrice" label="Orginal Price">
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="data.description" label="Description">
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="data.image" label="Image">
                </v-text-field>
              </v-col>
            </v-row>
            
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="data.companyId" label="CompanyId">
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="data.categoryId" label="CategoryId">
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
        <v-divider></v-divider>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey darken-1" class="mr-2" dark @click="$emit('close')">
          Cancel </v-btn
        ><v-btn color="primary" class="mr-4" dark @click="updateProduct">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
export default {
  name: "Edit",
  data() {
    return {
      data: {
        id: "",
        productName: "",
        price: "",
        originalPrice: "",
        description: "",
        image: "",
        companyId: "",
        categoryId: "",
      },
    };
  },
  props: ["dialogEdit", "currentItem"],
  computed: {
    dialog: {
      get() {
        return this.dialogEdit;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },
  watch: {
    currentItem: function () {
      this.data.id = this.currentItem.id;
      this.data.productName = this.currentItem.productName;
      this.data.price = this.currentItem.price;
      this.data.originalPrice = this.currentItem.originalPrice;
      this.data.description = this.currentItem.description;
      this.data.image = this.currentItem.image;
      this.data.companyId = this.currentItem.companyId;
      this.data.categoryId = this.currentItem.categoryId;
    },
  },
  methods: {
    updateProduct() {
      axios
        .put("https://localhost:44371/api/Product/UpdateProduct", this.data)
        .then((response) => {
          this.$emit("updateData");
          this.$emit("close");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>
