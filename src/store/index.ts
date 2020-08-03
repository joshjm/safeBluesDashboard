import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    virusParameters: {incubationShape: 100, incubationRate: 14, 
      strandID: null,
      startTime: null,
      endTime: null,
      seedingProbability: null,
      infectionProbabilityMap: null,
      incubationPeriodDistribution: null,
      infectiousPeriodDistribution: null,
    }, 
    jsonCovidAPIData: [], 
    safeBluesData: []
    
  },
  mutations: {
    updateVirusParameters (state, virusParameters){
      state.virusParameters = virusParameters
    },
    updateShape (state, newShape){
      state.virusParameters.incubationShape = newShape
    },
    updateRate (state, newRate){
      state.virusParameters.incubationRate = newRate
    },
    storeSafeBluesData (state, safeBluesData){
      state.safeBluesData = safeBluesData
    },
    storeCovidData (state, covidData){
      state.jsonCovidAPIData = covidData
    }
  },
  actions: {},
  modules: {}
})
