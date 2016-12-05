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
                    //console.log("Station: " + station)
                    //console.log("STATION NAME: " + station.headers['icy-name'])
                    //console.log("NOW PLAYING: " + station.title)
                    //console.log("GENRE: " + station.headers['icy-genre'])
                    //console.log("DESCRIPTION: " + station.headers['icy-description'])
                    //console.log("BITRATE: " + station.headers['icy-br'])
                    //console.log("CONTENT TYPE: " + station.headers['content-type'])

                    /*if (station.title !==undefined){
                        store.commit('updatecurrenttrack', {
                            newtrack: station.title
                        })
                    } else {
                        store.commit('updatecurrenttrack', {
                            newtrack: 'No Info Available'
                        })
                    }*/

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

        /*data () {
            return {
                musicSrc: 'http://streaming.radionomy.com/PHILOSOMATIKA-PROGRESSIVE',
                //stream: this.$store.state.currentstreamurl
            }
        },*/

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
        musicSrc: 'http://streaming.radionomy.com/PHILOSOMATIKA-PROGRESSIVE'
    }

    /*var stream = this.$store.state.currentstreamurl

    function getStationInfo() {

        setTimeout(getStationInfo, 10000);

        console.log("getStationInfo Fired")

        internetradio.getStationInfo(stream, function(error, station) {
            
            console.log(station)
            console.log("STATION NAME: " + station.headers['icy-name'])
            console.log("NOW PLAYING: " + station.title)
            console.log("GENRE: " + station.headers['icy-genre'])
            console.log("BITRATE: " + station.headers['icy-br'])
            console.log("CONTENT TYPE: " + station.headers['content-type'])
            console.log("DESCRIPTION: " + station.headers['icy-description'])

            store.commit('updatecurrenttrack', {
              newtrack: station.title
            })

            store.commit('updatecurrentbitrate', {
              newbitrate: station.headers['icy-br']
            })


        }, internetradio.StreamSource.STREAM);

    }

    getStationInfo()
    */

</script>

<style lang="scss" scoped>

    @import "./app/src/scss/settings.scss";

    #player {
        display: none;
    }

</style>
