<template>
  <form @submit.prevent="login()">
    <v-card>
      <v-card-title>Login to AgriSol</v-card-title>

      <v-card-text>
        <v-text-field outlined persistent-hint label="Email address" v-model="userData.email"></v-text-field>

        <v-text-field
          outlined
          persistent-hint
          type="password"
          label="Password"
          v-model="userData.password"
        ></v-text-field>
      </v-card-text>

      <v-card-actions class="px-4 pb-5">
        <v-btn type="submit" color="green" x-large block dark>Login</v-btn>
      </v-card-actions>
      <v-card-actions>
      <v-btn
        color="deep-green lighten-2"
        text
        @click="register()"
      >
        Create an account
      </v-btn>
    </v-card-actions>

    </v-card>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        email: "",
        password: ""
      }
    };
  },

  computed: {
    
  },

  methods: {
    login() {
      window.axios
        .post(
          `https://adonis-agrisol-api.herokuapp.com/api/auth/login`,
          this.userData
        )
        .then(({ data }) => {
          console.log(data);
          if (data.status) {
            localStorage.setItem("token", data.token.token);
            this.$router.push({ name: "crops" });
          }
        });
    },
    register(){
      return this.$router.push({name:"register"})
    }
  }
};
</script>