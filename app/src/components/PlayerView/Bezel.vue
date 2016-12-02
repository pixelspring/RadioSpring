
<template>
    <div class="bezel">
      	<div class="info">
    		<div id="stationName" class="station-name">{{currentstation}}</div>
    		<div id="currentTrack" class="current-track">{{currenttrack}}</div>
            <!--<div id="currentVolume" class="current-volume"><span v-text="prettyvalue.toFixed()"></span></div>-->
            <div id="currentVolume" class="current-volume">VOL: {{currentvolume.toFixed()}}</div>
    	</div>
    </div>
</template>

<script>

	import store from 'src/store/store.js'
    var internetradio = require('node-internet-radio');

    export default {

		data: function () {
            return data
        },

        data () {
            return {
                //streamlist: this.$store.state.streams,
                //currentstation:  this.$store.state.currentstation,
                //currenttrack: this.$store.state.currenttrack,
                //volumeslider: this.$store.state.volumeslider,
            }
        },

        computed: {
            prettyvalue: function () {
                return this.volumeslider * 100
            },
            currentstation: function() {
                return store.state.currentstation
            },
            currenttrack: function() {
                return store.state.currenttrack
            },
            currentvolume: function() {
                return store.state.currentvolume * 100
            }
        },

	}

	var streamUrl = 'http://streaming.radionomy.com/PHILOSOMATIKA-PROGRESSIVE';

    internetradio.getStationInfo(streamUrl, function(error, station) {

        //console.log(station);    
        
        var a = station.headers['icy-name'];
        var b = station.title;
        var c = station.headers['icy-description'];
        var d = station.headers['icy-genre'];
        var e = station.headers['icy-br'];
        
        //document.getElementById("stationName").innerHTML = a;
        //document.getElementById("currentTrack").innerHTML = b;

    }, internetradio.StreamSource.STREAM);

</script>

<style lang="scss" scoped>

    @import "./app/src/scss/settings.scss";

    .bezel {
	    padding: 8px 16px;
	    border-radius: 4px;

	    flex-grow: 1;

	    background: black;
	    color: $bezel-text-color;
	}

	.station-name {
		font-size: 12px;
	}

	.current-track {
		font-size: 10px;
	}

    .current-volume {
        font-size: 10px;
    }

</style>