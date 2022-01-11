<template>
  <div>
    <v-container fluid>
        <v-card v-for="crop in crops" :key="crop.id" class="my-md-5" :to="`/crops/${crop.id}`">
          <v-card-title>{{crop.name}}</v-card-title>
          <v-card-subtitle>{{new Date(crop.created_at).toDateString("en-US")}}</v-card-subtitle>
          <div v-if="crop.links !== null">
          <iframe
            width="100%"
            min-height="300"
            :src="`https://www.youtube.com/embed/${crop.links}`"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
          <v-card-text>{{crop.description}}</v-card-text>
        </v-card>
      <v-btn fab dark large bottom right color="red" to="/add-crop">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-container>
  </div>
</template>

<script>
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
    window.axios.get(`crops`).then(response => {
      console.log(response.data);
      if (response.status) {
        this.crops = response.data.data;
        console.log("crops :", this.crops);
      }
    });
  }
};
</script>