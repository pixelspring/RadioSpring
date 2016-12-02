import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        streams: [
          { 
            name: 'Philosomatika', 
            url: 'http://streaming.radionomy.com/-PHILOSOMATIKA-', 
            web: 'http://philosomatika.com/', 
          },

          { 
            name: 'Philosomatika Progressive', 
            url: 'http://streaming.radionomy.com/PHILOSOMATIKA-PROGRESSIVE', 
            web: 'http://philosomatika.com/', 
          },

          { 
            name: 'Radio Bloodstream', 
            url: 'http://uk1.internet-radio.com:8294/live', 
            web: 'http://website.com/',  
          },

          {
            name: 'Black Cat Radio',
            url: 'http://66.45.246.202:8466/;',
            web: 'http://website.com/', 
          },

          {
            name: 'CLASSIC METAL RADIO',
            url: 'http://192.99.62.212:9904/stream',
            web: 'http://website.com/', 
          },

          {
            name: 'NSB RADIO',
            url: 'http://65.23.157.233:7904/;',
            web: 'http://website.com/', 
          }

        ],
        //volumeSlider:'1',
        currentvolume: '1',
        playToggleText: '▶',
        isPlaying: 0,

        currentstation: 'Pick a station',
        currenttrack: 'currenttrack',
    },

    mutations: {
        //updatecurrentstation: state => state.stationname,
        updatecurrenttrack: state => state.currenttrack,

        updatecurrentstation (state, payload) {
          state.currentstation = payload.newstation
        },

        updatevolume (state, payload) {
          state.currentvolume = payload.newvolume
        }
    },

    actions: {
        //
    },

    getters: {
        //
    }

})
