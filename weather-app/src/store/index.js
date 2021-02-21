import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
  params: {q: 'san francisco,us'},
  headers: {
    'x-rapidapi-key': '003ab681a2mshe69c64259215d7ep15ac46jsn8ac75eeb12c6',
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
  }
};

export default new Vuex.Store({
  state: {
      weather_data:[]
  },
  getters:{
    allweather_data: state => state.weather_data
  },
  mutations: {
    setdata: (state, weather_data) => (state.weather_data = weather_data),
  },
  actions: {

    async fetchdata({ commit }) {
      axios.request(options).then(function (response) {
        console.log(response.data)
     commit('setdata', response.data)
  }).catch(function (error) {
    console.error(error);
  })
  }
},
  modules: {
  }
})
