<template>
  <div>
    <v-container fluid>
      <form @submit.prevent="save()">
        <v-card flat>
          <v-card-title>Sale Produce</v-card-title>

          <v-card-text>
            <v-text-field outlined persistent-hint label="Produce" v-model="produceData.produce"></v-text-field>
            <v-text-field outlined persistent-hint label="Quantity" v-model="produceData.quantity"></v-text-field>
            <v-text-field outlined persistent-hint label="amount" v-model="produceData.amount"></v-text-field>
            <v-text-field outlined persistent-hint label="Seller name" v-model="produceData.seller"></v-text-field>
            <v-text-field outlined persistent-hint label="Phone " v-model="produceData.phone"></v-text-field>
            <v-text-field outlined persistent-hint label="Location" v-model="produceData.location"></v-text-field>

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
      produceData: {
        amount: "",
        quantity: "",
        seller: "",
        produce: "",
        location:"",
        phone:""
      }
    };
  },

  computed: {},

  methods: {
    save() {
      window.axios
        .post(`market`, this.produceData, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(({ data }) => {
          console.log(data);
          if (data.status) {
            this.$router.push({ name: "market" });
          }
        });
    }
  }
};
</script>