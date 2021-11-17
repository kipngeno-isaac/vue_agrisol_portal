<template>
  <div>
    <v-container fluid>
      <form @submit.prevent="save()">
        <v-card flat>
          <v-card-title>Add Crop</v-card-title>

          <v-card-text>
            <v-text-field outlined persistent-hint label="Name" v-model="cropData.name"></v-text-field>
            <v-text-field outlined persistent-hint label="Duration" v-model="cropData.duration"></v-text-field>
            <v-textarea outlined persistent-hint label="Description" v-model="cropData.description"></v-textarea>

            <v-text-field outlined persistent-hint label="Image Link" v-model="cropData.link"></v-text-field>
          </v-card-text>

          <v-card-actions class="px-4 pb-5">
            <v-btn type="submit" color="green" x-large block dark>Save</v-btn>
          </v-card-actions>
        </v-card>
      </form>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      cropData: {
        name: "",
        duration: "",
        description: "",
        link: ""
      }
    };
  },

  computed: {},

  methods: {
    save() {
      axios
        .post(
          `https://adonis-agrisol-api.herokuapp.com/api/crops`,
          this.userData,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          }
        )
        .then(({ data }) => {
          console.log(data);
          if (data.status) {
            this.$router.push({ name: "crops" });
          }
        });
    }
  }
};
</script>