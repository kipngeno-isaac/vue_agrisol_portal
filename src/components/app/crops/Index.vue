<template>
  <div>
    <v-container fluid>
      <v-data-table :headers="headers" :items="crops" :items-per-page="5" class="elevation-1"></v-data-table>
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