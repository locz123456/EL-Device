<template>
  <v-dialog v-model="dialog" max-width="640px">
    <v-card flat tile>
      <v-card-title class="primary headline">
        <span style="color: white">Add Category</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="data.categoryName"
                  label="Category Name"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="data.description" label="Description">
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
        ><v-btn color="primary" class="mr-4" dark @click="add">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
export default {
  name: "Add",
  data() {
    return {
      data: {
        categoryName: "",
        description: "",
      },
    };
  },
  props: ["dialogAdd"],
  computed: {
    dialog: {
      get() {
        return this.dialogAdd;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },
  methods: {
    add() {
      axios
        .post("https://localhost:44371/api/Category/InsertCategory", this.data)
        .then((response) => {
          this.$emit("updateData");
          this.$emit("close");
          this.data.categoryName = "";
          this.data.description = "";
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
