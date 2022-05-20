<template>
  <v-dialog v-model="dialog" max-width="640px">
    <v-card flat tile>
      <v-card-title class="primary headline">
        <span style="color: white">Update Supplier</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="data.conpanyName"
                  label="Company Name"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="data.address" label="Address">
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="data.email" label="Email">
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="data.phone" label="Phone">
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
        ><v-btn color="primary" class="mr-4" dark @click="update">
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
        conpanyName: "",
        address: "",
        email: "",
        phone: "",
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
      this.data.conpanyName = this.currentItem.conpanyName;
      this.data.address = this.currentItem.address;
      this.data.email = this.currentItem.email;
      this.data.phone = this.currentItem.phone;
    },
  },
  methods: {
    update() {
      axios
        .put("https://localhost:44371/api/Supplier/UpdateSupplier", this.data)
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
