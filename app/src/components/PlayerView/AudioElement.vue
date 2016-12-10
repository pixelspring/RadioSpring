<template>
    <div>
        <audio 
            id="player" 
            @stalled="onStalled"
            @loadstart="onLoadstart"
            @loadedmetadata="onLoadedmetadata"
            @waiting="onWaiting"
            @play="onPlay"
            @playing="onPlaying"
            @pause="onPause"
            @emptied="onEmptied"
        >
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

            onStalled: function () {
                console.log("PLAYBACK STALLED")
                store.commit('updatebufferstatus', {
                    newbufferstatus: true
                })
            },
            onLoadstart: function () {
                console.log("LOAD START")
            },
            onWaiting: function () {
                console.log("WAITING (buffering)")
                store.commit('updatebufferstatus', {
                    newbufferstatus: true
                })
            },
            onLoadedmetadata: function () {
                console.log("LOADEDMETADATA")
            },
            onPlay: function () {
                console.log("PLAY")
            },
            onPlaying: function () {
                console.log("PLAYING")
                store.commit('updatebufferstatus', {
                    newbufferstatus: false
                })
            },
            onPause: function () {
                console.log("PAUSE")
            },
            onEmptied: function () {
                console.log("EMPTIED")
            },

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
