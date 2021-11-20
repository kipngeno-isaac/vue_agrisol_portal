<template>
  <div>
    <v-container fluid>
      <div>
        <v-card v-for="crop in crops" :key="crop.id" class="my-md-5" :to="`/crops/${crop.id}`">
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
  components: {},

  data() {
    return {
      headers: [
        {
          text: "Crop",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Duration (Months)", value: "duration" },
        { text: "Best Months", value: "best_months" },
        { text: "Description", value: "description" },
        { text: "Date ", value: "date_created" }
      ],
      crops: [
        {
          name: "Maize",
          duration: 7,
          description: "Lorem kmkg",
          best_months: "",
          created_at: ""
        },
        {
          name: "Maize",
          duration: 7,
          description: "Lorem kmkg",
          best_months: "",
          created_at: ""
        },
        {
          name: "Maize",
          duration: 7,
          description: "Lorem kmkg",
          best_months: "",
          created_at: ""
        }
      ]
    };
  },

  computed: {},

  methods: {},

  mounted() {
    axios
      .get(`https://adonis-agrisol-api.herokuapp.com/api/crops`)
      .then(response => {
        console.log(response.data);
        if (response.status) {
          this.crops = response.data.data;
          console.log("crops :", this.crops);
        }
      });
  }
};
</script>