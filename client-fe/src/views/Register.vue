<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
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
                    name="name"
                    prepend-inner-icon="mdi-account"
                    type="text"
                    class="rounded-0"
                    outlined
                    v-model="userName"
                  ></v-text-field>
                  <v-text-field
                    label="Enter your email"
                    name="email"
                    prepend-inner-icon="mdi-email"
                    type="email"
                    class="rounded-0"
                    outlined
                    v-model="email"
                  ></v-text-field>
                  <v-text-field
                    label="Enter your password"
                    name="password"
                    prepend-inner-icon="mdi-lock"
                    type="password"
                    class="rounded-0"
                    outlined
                    v-model="password"
                  ></v-text-field>

                  <v-btn
                    type="submit"
                    class="rounded-0"
                    color="blue"
                    x-large
                    block
                    dark
                    >Register</v-btn
                  >

                  <v-card-actions class="text--secondary">
                    <v-spacer></v-spacer>
                    <!-- <router-link :to="{ name: 'SignUp' }">Sign Up</router-link> -->
                    Already have an account?
                    <v-tab
                      v-for="link in links"
                      :key="link.text"
                      router
                      :to="link.route"
                      style="color: blue; text-decoration: underline"
                    >
                      {{ link.text }}
                    </v-tab>
                  </v-card-actions>
                </v-form>
              </v-card-text>
              <v-card-actions class="ml-6 mr-6 text-center">
                <p>
                  By continuing, you agree to Electronic Divice
                  <a href="#" class="pl-2" style="color: #000000">Policy</a> and
                  <a href="#" class="pl-2" style="color: #000000"
                    >Terms of Use</a
                  >
                </p>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userName: "",
      email: "",
      password: "",
      links: [{ text: "Login", route: "/login" }],
    };
  },
  methods: {
    async handleSubmit() {
      const data = {
        userName: this.userName,
        password: this.password,
        email: this.email,
      };
      const response = await 
      axios.post("https://localhost:44371/api/Authenticate/register", data)
      if (response.status== 200) {
        alert("Sign Up Success");
        this.$router.push("/login");
      }
      else{
        alert("Sign Up Fail");
      }
      
    },
  },
};
</script>

<style lang="css" scoped>
.logo {
  font-size: 300px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}
</style>
