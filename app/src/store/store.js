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
            name: 'Rockhard Lossless',
            url: 'http://95.211.162.73:8000/;',
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
          },

          {
            name: 'RockLive Radio',
            url: 'http://46.4.77.21:27815/;',
            web: 'http://website.com/', 
          },

          {
            name: 'Drum Basement',
            url: 'http://188.165.232.7:8789/;',
            web: 'http://website.com/', 
          },

          {
            name: 'Pure FM Prog',
            url: 'http://212.7.196.96:8000/;',
            web: 'http://website.com/', 
          }

        ],
        //volumeSlider:'1',
        currentvolume: '1',
        playToggleText: '▶',
        playstatus: 0,

        currentstreamurl: '',
        currentstation: 'currentstation',
        currentstationdesc: 'currentstationdesc',
        currenttrack: 'Not Playing',
        currentbitrate: undefined,
    },

    mutations: {
        //updatecurrentstation: state => state.stationname,
        
        //updatecurrenttrack: state => state.currenttrack,

        updatecurrentstreamurl (state, payload) {
          state.currentstreamurl = payload.newstreamurl
        },

        updatecurrentstation (state, payload) {
          state.currentstation = payload.newstation
        },

        updatecurrentstationdesc (state, payload) {
          state.currentstationdesc = payload.newstationdesc
        },

        updatecurrenttrack (state, payload) {
          state.currenttrack= payload.newtrack
        },

        updatecurrentbitrate(state, payload) {
          state.currentbitrate= payload.newbitrate
        },

        updatevolume (state, payload) {
          state.currentvolume = payload.newvolume
        },

        updateplaystatus (state, payload) {
          state.playstatus = payload.newplaystatus
        }
    },

    actions: {
        //
    },

    getters: {
        //
    }

})
