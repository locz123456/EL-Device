<template>
  <div class="dashboard">
    <v-subheader>
      <v-icon class="mr-2">mdi-home</v-icon>
      <h3>Product List </h3>
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        small
        dark
        elevation="3"
        fab
        @click="dialogAdd = true"
      >
        <v-icon color="white">mdi-plus</v-icon>
      </v-btn>
    </v-subheader>
    <v-row class="mt-0">
      <v-col>
        <v-card>
          <v-data-table
            :headers="headers"
            :items="products"
            :items-per-page="10"
          >
            <template v-slot:item="{ item }">
              <tr>
                <td>{{ item.productName }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.originalPrice }}</td>
                <td>{{ item.description }}</td>
                <td class="image">{{ item.image }}</td>
                <td>{{ item.companyId }}</td>
                <td>{{ item.categoryId }}</td>
                
                <td>
                  <div class="d-flex justify-end align-center">
                    <v-btn
                      fab
                      dark
                      elevation="3"
                      class="mr-3"
                      @click="(dialogEdit = true), (currentItem = item)"
                      x-small
                      color="blue-grey"
                    >
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn
                      fab
                      dark
                      elevation="3"
                      x-small
                      color="red"
                      @click="(dialogDelete = true), (productId = item.id)"
                    >
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </div>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialogDelete" max-width="480px" class="dialog-delete">
      <v-card>
        <v-alert prominent type="error">
          <v-row align="center">
            <v-col class="text-center text-h5" cols="12">
              Delete?
            </v-col>
            
              <v-spacer></v-spacer>
              <v-col cols="6">
                <v-btn @click="deleteProduct"  text style="margin-left:50px;border: 1px solid red;">Accept</v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn @click="dialogDelete = false">Cancel</v-btn>
              </v-col>
            </v-row>
        
        </v-alert>
      </v-card>
    </v-dialog>
    <add
      :dialogAdd="dialogAdd"
      @close="dialogAdd = false"
      @updateData="getListProduct"
    />
    <edit
      :dialogEdit="dialogEdit"
      :currentItem="currentItem"
      @close="dialogEdit = false"
      @updateData="getListProduct"
    />
  </div>
</template>

<script>
import axios from "axios";
import Add from "./Add.vue";
import Edit from "./Edit.vue";
export default {
  components: { Add, Edit },
  name: "Customer",
  data() {
    return {
      headers: [
        { text: "Product Name", value: "productName" },
        { text: "Price", value: "price" },
        { text: "Original Price", value: "originalPrice" },
        { text: "Description", value: "description" },
        { text: "Image", value: "image" },
        { text: "CompanyId", value: "companyId" },
        { text: "CategoryId", value: "categoryId" },
        { text: "Function", value: "action", align: "right" },
      ],
      products: [],
      dialogAdd: false,
      dialogEdit: false,
      dialogDelete: false,
      currentItem: null,
      customerId: null,
    };
  },
  methods: {
    getListProduct() {
      axios
        .get("https://localhost:44371/api/Product/GetAllProduct",)
        .then((response) => {
          this.products = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
        
    },
    deleteProduct() {
      axios
        .delete(
          "https://localhost:44371/api/Product/DeleteProduct?id=" +
            this.productId
        )
        .then((response) => {
          if (response.data) {
            var newArr = this.products.filter((x) => x.id != this.productId);
            this.products = newArr;
            this.dialogDelete = false;
          }
        });
    },
  },
  created() {
    this.getListProduct();
    
  },
};
</script>

<style>
td{
  max-width: 300px ;
}
</style>
