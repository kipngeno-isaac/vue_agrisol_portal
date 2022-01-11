<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" class="light-green darken-1" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 white--text">AgriSol</v-list-item-title>
          <v-list-item-subtitle class="white--text">farmspace</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block to="/login" link>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="light-green--text darken-4 display-1">AgriSol</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    logout:"/auth/login",
    items: [
      { title: "Crops", icon: "mdi-view-dashboard", to: "/crops" },
      { title: "Market", icon: "mdi-help-box", to: "/market" }

    ]
  })
};
</script>