import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    virusParameters: {
      strandId: null,
      startTimestamp: null,
      endTimestamp: null,
      seedingProbability: null,
      infectionProbabilityMap: null,
      incubationShape: null,
      incubationRate: null,
      infectiousShape: null,
      infectiousRate: null
    },
    jsonCovidAPIData: [],
    safeBluesData: [],
    safeBluesURL: "https://api.safeblues.org/admin/list"
  },
  mutations: {
    updateVirusParameters(state, virusParameters) {
      state.virusParameters = virusParameters
    },
    updateIncubationShape(state, newShape) {
      state.virusParameters.incubationShape = newShape
    },
    updateIncubationRate(state, newRate) {
      state.virusParameters.incubationRate = newRate
    },
    updateInfectiousShape(state, newShape) {
      state.virusParameters.infectiousShape = newShape
    },
    updateInfectiousRate(state, newRate) {
      state.virusParameters.infectiousRate = newRate
    },
    storeSafeBluesData(state, safeBluesData) {
      state.safeBluesData = safeBluesData
    },
    storeCovidData(state, covidData) {
      state.jsonCovidAPIData = covidData
    },
    updateStartTimestamp(state, timestamp) {
      state.virusParameters.startTimestamp = timestamp;
    },
    updateEndTimestamp(state, timestamp) {
      state.virusParameters.endTimestamp = timestamp;
    }
  },
  actions: {},
  modules: {}
})
