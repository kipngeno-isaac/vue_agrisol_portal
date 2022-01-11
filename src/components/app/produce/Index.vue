<template>
  <div>
    <v-container fluid>
      <div>
        <v-card v-for="item in produce" :key="item.id" class="my-md-5">
          <v-card-title>{{item.name}}</v-card-title>
          <v-card-subtitle>{{new Date(item.created_at).toDateString("en-US")}}</v-card-subtitle>
          <v-card-text>{{item.description}}</v-card-text>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      produce: []
    };
  },

  computed: {},

  methods: {},

  mounted() {
    window.axios.get(`produce`).then(response => {
      console.log(response.data);
      if (response.status) {
        this.produce = response.data.data;
        console.log("produce :", this.produce);
      }
    });
  }
};
</script>