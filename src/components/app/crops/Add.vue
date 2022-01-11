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

            <v-text-field outlined persistent-hint label="Video Id" v-model="cropData.links"></v-text-field>
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
export default {
  data() {
    return {
      cropData: {
        name: "",
        duration: "",
        description: "",
        links: ""
      }
    };
  },

  computed: {},

  methods: {
    save() {
      window.axios
        .post(`crops`, this.cropData, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
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