<template>
  <v-container grid-list-xs>    
    <h2 class="font-weight-light text-center">Graph.</h2>    
    <v-card class="mx-auto">
      <v-card-title>
        Multi Axis Line Graph Of Humidity Against Temperature For Each Day.
      </v-card-title>
      <v-card-text>
        <canvas id="myChart"></canvas>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import Chart from "chart.js";
export default {
  computed: mapGetters(["allweather_data"]),
  mounted() {
    var date = [];
    var temperature = [];
    var humidity = [];
    for (const key in this.allweather_data.list) {
      date[key] = this.allweather_data.list[key].dt_txt;
      temperature[key] = this.allweather_data.list[key].main.temp;
      humidity[key] = this.allweather_data.list[key].main.humidity;
    }
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: date,
        datasets: [
          {
            label: "Temperatue",
            fill: "false",
            borderColor: "red",
            yAxisID: "y-axis-0",
            data: temperature,
          },
          {
            label: "Humidity",
            fill: "false",
            yAxisID: "y-axis-1",
            borderColor: "blue",
            data: humidity,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              position: "left",
              id: "y-axis-0",
            },
            {
              position: "right",
              id: "y-axis-1",
            },
          ],
        },
      },
    });

    console.log(myChart);
  },
};
</script>

<style></style>
