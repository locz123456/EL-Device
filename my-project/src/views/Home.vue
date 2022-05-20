<template>
  <div class="fill-height" fluid>
    <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="8" md="4" lg="4">
        <v-card elevation="0">
          <v-icon contain height="200" color="blue" class="logo"
            >mdi-electron-framework</v-icon
          >
          <v-card-text>
            <v-form @submit.prevent="handleSubmit">
              <v-text-field
                label="Enter your user name"
                name="user"
                v-model="userName"
                prepend-inner-icon="mdi-account"
                type="text"
                class="rounded-0"
                outlined
              ></v-text-field>
              <v-text-field
                label="Enter your password"
                name="password"
                v-model="password"
                prepend-inner-icon="mdi-lock"
                type="password"
                suffix="| Forgot?"
                class="rounded-0"
                outlined
              ></v-text-field>
              
              <v-btn
                type="submit"
                class="rounded-0"
                color="blue"
                x-large
                block
                style="color: white"
                >Login</v-btn
              >
              <v-card-actions class="text--secondary">
                <v-spacer></v-spacer>
                <v-checkbox color="#000000" label="Remember me"></v-checkbox>

                <!-- <router-link :to="{ name: 'SignUp' }">Sign Up</router-link> -->
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userName: "",
      password: "",
      links: [{ text: "SingUp", route: "/signup" }],
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post(
        "https://localhost:44371/api/Authenticate/login",
        {
          userName: this.userName,
          password: this.password,
          email: this.email,
        }
      );
      console.warn(response);
      if (response.status == 200) {
        alert("Login Success");
        this.$router.push("/customer");
      }else{
        alert("Login Fail");
      }
      localStorage.setItem("token", response.data.token);
    },
  },
};
</script>
<style lang="css" scoped>
.logo {
  font-size: 300px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
}
</style>
