<template>
    <div>
        <audio id="player">
            <source :src="musicSrc">
        </audio>
    </div>
</template>

<script>
    import store from 'src/store/store.js'
    var internetradio = require('node-internet-radio');

    export default {

        watch: {
            
            'playstatus': function(value) {
                if(value) {
                    this.getstationinfo()
                    this.interval = setInterval(this.getstationinfo, 5000)
                } else {
                    clearInterval(this.interval)
                }
            }

        },

        methods: {

            getstationinfo: function() {

                let stream = this.$store.state.currentstreamurl

                internetradio.getStationInfo(stream, function(error, station) {
                    if(error) {console.log(error)}

                    store.commit('updatecurrentstation', {
                      newstation: station.headers['icy-name']
                    })

                    store.commit('updatecurrenttrack', {
                        newtrack: station.title
                    })

                    store.commit('updatecurrentstationdesc', {
                      newstationdesc: station.headers['icy-description']
                    })

                    store.commit('updatecurrentbitrate', {
                      newbitrate: station.headers['icy-br']
                    })

                }, internetradio.StreamSource.STREAM);
                
            }

        },

        computed: {
            prettyvalue: function () {
                return this.volumeslider * 100
            },
            playstatus: function() {
                return store.state.playstatus
            },
            stream: function() {
                return store.state.currentstreamurl
            }
        }

    }
   
    var data = { 
        //musicSrc: 'http://streaming.radionomy.com/PHILOSOMATIKA-PROGRESSIVE'
    }

</script>

<style lang="scss" scoped>

    @import "./app/src/scss/settings.scss";

    #player {
        display: none;
    }

</style>
