<template>
  <div>
    <v-container fluid>
      <div>
        <v-card>
          <v-card-title>{{crop.name}}</v-card-title>
          <v-card-subtitle>{{new Date(crop.created_at).toDateString("en-US")}}</v-card-subtitle>
          <v-card-text>{{crop.description}}</v-card-text>
        </v-card>
      </div>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      crop: {
        name: "Maize",
        duration: 7,
        description: "Lorem kmkg",
        best_months: "",
        created_at: ""
      }
    };
  },

  computed: {},

  methods: {},

  mounted() {
    const id = this.$route.params.id;
    console.log("param : ", id);
    axios
      .get(`https://adonis-agrisol-api.herokuapp.com/api/crops/${id}`)
      .then(response => {
        console.log(response.data);
        if (response.status) {
          this.crop = response.data.data;
          console.log("crops :", this.crop);
        }
      });
  }
};
</script>