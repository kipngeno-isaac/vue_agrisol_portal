<template>
  <v-row>
    <v-col cols="12" style="background:url(), cover, no-repeat">
      <v-row>
        <v-col 
          cols="12"
          md="4"
          offset-md="4"  
        >
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {

}
</script>