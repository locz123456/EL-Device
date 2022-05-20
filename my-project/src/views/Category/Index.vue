<template>
  <div class="dashboard">
    <v-subheader>
      <v-icon class="mr-2">mdi-home</v-icon>
      <h3>Category List</h3>
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
            :items="categorys"
            :items-per-page="10"
          >
            <template v-slot:item="{ item }">
              <tr>
                <td>{{ item.id }}</td>
                <td>{{ item.categoryName }}</td>
                <td>{{ item.description }}</td>
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
                      @click="(dialogDelete = true), (categoryId = item.id)"
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
            <v-col class="text-center text-h5" cols="12"> Delete? </v-col>

            <v-spacer></v-spacer>
            <v-col cols="6">
              <v-btn
                @click="deleteCategory"
                text
                style="margin-left: 50px; border: 1px solid red"
                >Accept</v-btn
              >
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
      @updateData="getList"
    />
    <edit
      :dialogEdit="dialogEdit"
      :currentItem="currentItem"
      @close="dialogEdit = false"
      @updateData="getList"
    />
  </div>
</template>

<script>
import axios from "axios";
import Add from "./Add.vue";
import Edit from "./Edit.vue";
export default {
  components: { Add, Edit },
  name: "Category",
  data() {
    return {
      headers: [
        { text: "category id", value: "id" },
        { text: "category Name", value: "categoryName" },
        { text: "Description", value: "description" },
        
        { text: "Function", value: "action", align: "right" },
      ],
      categorys: [],
      dialogAdd: false,
      dialogEdit: false,
      dialogDelete: false,
      currentItem: null,
      categoryId: null,
    };
  },
  methods: {
    getList() {
      axios
        .get("https://localhost:44371/api/Category/GetAllCategory", )
        .then((response) => {
          this.categorys = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteCategory() {
      axios
        .delete(
          "https://localhost:44371/api/Category/DeleteCategory?id=" +
            this.categoryId
        )
        .then((response) => {
          if (response.data) {
            var newArr = this.categorys.filter((x) => x.id != this.categoryId);
            this.categorys = newArr;
            this.dialogDelete = false;
          }
        });
    },
  },

  async created() {
    this.getList();
    // const response = await axios.get(
    //   "https://localhost:44371/api/Customer/GetAllCustomer",
    //   {
    //     headers: {
    //       Authorization: "Bearer" + localStorage.getItem("token"),
    //     },
    //   }
    // );
    // this.customers = response.data;
  },
};
</script>

<style>
</style>
