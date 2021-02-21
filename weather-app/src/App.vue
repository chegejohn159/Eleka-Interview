<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h5 class="font-weight-light text-center">Eleka Interview John Chege.</h5>
      </div>

      <v-spacer></v-spacer>

      <router-link to="/"> <v-btn text to="/">Home</v-btn></router-link> |
      <router-link to="/graphs"
        ><v-btn text to="/graphs">Graphs.</v-btn></router-link
      >
    </v-app-bar>

    <v-main>
      <v-container grid-list-xs>
        <router-view>
          <HelloWorld />
        </router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
