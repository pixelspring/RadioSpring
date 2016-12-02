<template>
    <div>
        <audio id="player">
            <source :src="musicSrc">
        </audio>
    </div>
</template>

<script>

    export default {

        methods: {
            //
        },

        data () {
            return {
                musicSrc: 'http://streaming.radionomy.com/PHILOSOMATIKA-PROGRESSIVE'
            }
        }

    }
   
   
    var data = { 
        musicSrc: 'http://streaming.radionomy.com/PHILOSOMATIKA-PROGRESSIVE'
    }

    var stream = 'http://streaming.radionomy.com/PHILOSOMATIKA-PROGRESSIVE';

    var internetradio = require('node-internet-radio');

    internetradio.getStationInfo(stream, function(error, station) {

        //console.log(station);

        // document.getElementById("info").innerHTML = 
        //     
        //     '<div class="station-name">' + station.headers['icy-name'] + '</div>'
        //     + '<div class="current-track">' + station.title + '</div>'; 
        //     // + station.headers['icy-description'] + '<br>'
        //     // + station.headers['icy-genre'] + '<br>'
        //     // + station.headers['icy-br'] + 'kbs<br>';

    }, internetradio.StreamSource.STREAM);

</script>

<style lang="scss" scoped>

    @import "./app/src/scss/settings.scss";

    #player {
        display: none;
    }

</style>
