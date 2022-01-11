<template>
  <div>
    <v-container fluid>
      <div>
        <v-card v-for="item in produce" :key="item.id" class="my-md-5">
          <v-card-title>{{item.produce}}</v-card-title>
          <v-card-subtitle>posted {{new Date(item.created_at).toDateString("en-US")}}</v-card-subtitle>
          <v-card-text>
            <v-simple-table dense>
              <template v-slot:default>
                <tbody>
                  <tr>
                    <th>Produce</th>
                    <td>{{ item.produce }}</td>
                  </tr>
                  <tr>
                    <th>Seller</th>
                    <td>{{ item.seller }}</td>
                  </tr>
                  <tr>
                    <th>Location</th>
                    <td>{{ item.location }}</td>
                  </tr>
                  <tr>
                    <th>Contact</th>
                    <td>{{ item.phone }}</td>
                  </tr>
                  <tr>
                    <th>Quantity</th>
                    <td>{{ item.quantity }}</td>
                  </tr>
                  <tr>
                    <th>Amount</th>
                    <td>{{ item.amount }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
         <v-btn fab dark large bottom right color="green" to="/add-market">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
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
    window.axios.get(`market`).then(response => {
      console.log(response.data);
      if (response.status) {
        this.produce = response.data.data;
        console.log("produce :", this.produce);
      }
    });
  }
};
</script>