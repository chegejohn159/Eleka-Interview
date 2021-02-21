<template>
  <div>    
    <div>
      <p class="font-weight-light" style="margin-bottom:-0.1%;">City ID: <b>{{ allweather_data.city.id }}</b> </p>
      <p class="font-weight-light" style="margin-bottom:-0.1%;">City Name: <b>{{ allweather_data.city.name }}</b></p>
      <p class="font-weight-light" style="margin-bottom:-0.1%;">City Latitude: <b>{{ allweather_data.city.coord.lat }}</b></p>
      <p class="font-weight-light" style="margin-bottom:-0.1%;">City Longitude: <b>{{ allweather_data.city.coord.lon }}</b> </p>
    </div>

    
      <h2 class="font-weight-light text-center">Weather Data</h2>

      <v-data-table
        :headers="headers"
        :items="allweather_data.list"
        :items-per-page="10"
        class="elevation-1"
      ></v-data-table>
      <div></div>
    
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ShowData",
  data() {
    return {
      headers: [
        {
          text: "Date",
          align: "start",
          sortable: false,
          value: "dt_txt",
        },
        { text: "Temparature", value: "main.temp" },
        { text: "Humidity", value: "main.pressure" },
        { text: "Pressure", value: "main.humidity" },
      ],
    };
  },
  methods: {
    ...mapActions(["fetchdata"]),
  },
  computed: mapGetters(["allweather_data"]),
  mounted() {
    this.fetchdata();
  },
};
</script>

<style scoped></style>
