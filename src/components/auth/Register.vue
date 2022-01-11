<template>
  <form @submit.prevent="register()">
    <v-card>
      <v-card-title>Sign Up here</v-card-title>

      <v-card-text>
        <v-text-field outlined label="Full name" v-model="userData.name"></v-text-field>

        <v-text-field outlined label="Email address" v-model="userData.email"></v-text-field>

        <v-text-field outlined label="Phone" v-model="userData.phone"></v-text-field>

        <v-text-field outlined label="County" v-model="userData.county"></v-text-field>

        <v-text-field outlined label="Password" type="password" v-model="userData.password"></v-text-field>
      </v-card-text>

      <v-card-actions class="px-4 pb-5">
        <v-btn type="submit" color="green" x-large block dark>Register User</v-btn>
      </v-card-actions>
      <v-card-actions>
      <v-btn
        color="deep-green lighten-2"
        text
        @click="login()"
      >
        Already have an account
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
        name: "",
        email: "",
        phone: "",
        county: "",
        password: ""
      }
    };
  },

  methods: {
    register() {
      // console.log(this.userData);
      window.axios
        .post(
          `https://adonis-agrisol-api.herokuapp.com/api/auth/register`,
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
    login(){
      return this.$router.push({name:"login"})
    }
  }
};
</script>