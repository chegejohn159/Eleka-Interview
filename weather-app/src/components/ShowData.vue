<template>

  <div>
    <h3>{{allweather_data.city.name}}</h3>

    <div class="container card bg-info">
      <p>City ID: {{allweather_data.city.id}}</p>
      <p>City Name: {{allweather_data.city.name}}</p>
      <p>City Latitude: {{allweather_data.city.coord.lat}}</p>
      <p>City Longitude: {{allweather_data.city.coord.lon}}</p>

    </div>

      <div class="container-fluid">
          <h2>Weather Data Table</h2>   
          
<table>
  <tr>
    <th>Date</th>
    <th>Temparature</th>
    <th>Humidity</th>
    <th>Pressure</th>
  </tr>
  
  <tr  v-for="wdata in allweather_data.list"
        :key="wdata.dt">
    <td>{{wdata.dt_txt}}</td>
    <td>{{ wdata.main.temp }}</td>
    <td>{{ wdata.main.pressure }}</td>
     <td> {{ wdata.main.humidity }}</td>
  </tr>

    <tr>
    <th>Date</th>
    <th>Temparature</th>
    <th>Humidity</th>
    <th>Pressure</th>
  </tr>
  
</table>
     <div> </div>
        
    </div>

  </div>
  


</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "ShowData",
    methods: {
    ...mapActions(["fetchdata"]),
  },
   computed: mapGetters(["allweather_data"]),
    mounted() {
    this.fetchdata();
  }

}
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

</style>
