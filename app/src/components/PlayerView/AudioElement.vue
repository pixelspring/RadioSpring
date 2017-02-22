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
            @error="errorHandler"
            preload="none"
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
                store.commit('updatebufferstatus', { newbufferstatus: true })
            },
            onLoadstart: function () {
                console.log("LOAD START")
            },
            onWaiting: function () {
                console.log("WAITING (buffering)")
                store.commit('updatebufferstatus', { newbufferstatus: true })
            },
            onLoadedmetadata: function () {
                console.log("LOADEDMETADATA")
            },
            onPlay: function () {
                console.log("PLAY")
                store.commit('updatecurrenttrack', { newtrack: 'Getting Track Info…' })
            },
            onPlaying: function () {
                console.log("PLAYING")
                store.commit('updatebufferstatus', { newbufferstatus: false })
            },
            onPause: function () {
                console.log("PAUSE")
                store.commit('updatecurrenttrack', { newtrack: 'Paused' })
            },
            onEmptied: function () {
                console.log("EMPTIED")
            },

            errorHandler: function () {    
                // ---------------------------------------------
                // Errors:
                // ---------------------------------------------
                // 1 MEDIA_ERR_ABORTED
                //   The fetching of the associated resource has been aborted by the user  
                // 2 MEDIA_ERR_NETWORK
                //   A network error caused the resource to stop being fetched.
                // 3 MEDIA_ERR_DECODE
                //   A decoding error caused the resource to stop being fetched.   
                // 4 MEDIA_ERR_SRC_NOT_SUPPORTED
                //   The associated resource has been detected to be not suitable.

                let errorCode = player.error.code
                console.log(errorCode)

            },

            getstationinfo: function() {

                let stream = this.$store.state.currentstreamurl

                internetradio.getStationInfo(stream, function(error, station) {
                    if(error) {
                        console.log("ERR::" + error)
                        store.commit('updatecurrenttrack', { newtrack: error })
                        player.pause()
                        // By setting the media element's src attribute to an empty string, you destroy the element's internal decoder, which stops the network download.
                        player.src = ""
                        player.currentTime = 0;
                        //alert(error)
                    }

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
