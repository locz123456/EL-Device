<template>
  <v-app>
    <v-main style="margin:100px 200px">
      <v-container align="center" justify="center" fill-height>
        <v-row class="bg-img" justify="space-around">
          <v-col cols="12" class="">
            <v-card width="400">
              <v-img
                height="200px"
                src="https://wallpapercave.com/wp/wp4568894.jpg"
              >
                <v-app-bar class="mt-8" flat color="rgba(0, 0, 0, 0)">
                  <v-avatar size="100">
                    <img
                      alt="user"
                      src="https://cdn.pixabay.com/photo/2019/12/16/21/39/tree-4700352_960_720.jpg"
                    />
                  </v-avatar>

                  <v-spacer></v-spacer>

                  <v-menu offset-y left>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn v-bind="attrs" v-on="on" color="white" icon>
                        <v-icon>mdi-dots-vertical</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item href="https://edu.fedorae.com">
                        <v-list-item-title>Edit</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-app-bar>

                <v-card-title class="white--text mt-8">
                  <p class="ml-3">Chu Duc Loc</p>
                </v-card-title>
              </v-img>

              <v-card-text>
                <div class="font-weight-bold ml-8 mb-2">Details</div>

                <v-list two-line>
                  <v-list-item href="">
                    <v-list-item-icon>
                      <v-icon color="indigo"> mdi-phone </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>0388820435</v-list-item-title>
                      <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-icon>
                      <v-icon>mdi-message-text</v-icon>
                    </v-list-item-icon>
                  </v-list-item>

                  <v-divider inset></v-divider>

                  <v-list-item href="">
                    <v-list-item-icon>
                      <v-icon color="indigo"> mdi-email </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title
                        >chuducloc.it.work@gmail.com</v-list-item-title
                      >
                      <v-list-item-subtitle>Work</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-icon>
                      <v-icon>mdi-message-text</v-icon>
                    </v-list-item-icon>
                  </v-list-item>

                  <v-divider inset></v-divider>

                  <v-list-item href="">
                    <v-list-item-icon>
                      <v-icon color="indigo"> mdi-facebook </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>Đức Lộc</v-list-item-title>
                      <v-list-item-subtitle>Online</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <under/>
  </v-app>
  
</template>
<script>
import Under from "../views/Under.vue";
export default {
  components: { Under },
};
</script>
<style>
.bg-img {
  background-image: url("https://wallpaperaccess.com/full/47178.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  border-radius: 3px;
}
</style>