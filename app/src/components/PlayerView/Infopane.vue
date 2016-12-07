
<template>
    <div class="info-pane-container">
      	<div class="info">
    		<div id="stationName" class="station-name">{{currentstation}} <span v-if="currentstationdesc !== undefined"> - {{currentstationdesc}}</span></div>
    		<div id="currentTrack" class="current-track">{{currenttrack}}</div>
    	</div>
        <div id="playSpinner" class="play-spinner">
            <span v-if="playstatus">PLAY</span>
        </div>
        <div class="indicators">
            <div id="currentVolume" class="current-volume"><img src="../../assets/images/volume-icon.svg"> {{currentvolume.toFixed()}}</div>
            <div id="currentBitrate" class="current-bitrate" v-if="currentbitrate !== undefined"><img src="../../assets/images/download-icon.svg">  {{currentbitrate}}</div>
        </div>
    </div>
</template>

<script>

	import store from 'src/store/store.js'

    export default {

        computed: {
            prettyvalue: function () {
                return this.volumeslider * 100
            },
            currentstation: function() {
                return store.state.currentstation
            },
            currentstationdesc: function() {
                return store.state.currentstationdesc
            },
            currenttrack: function() {
                return store.state.currenttrack
            },
            currentvolume: function() {
                return store.state.currentvolume * 100
            },
            currentbitrate: function() {
                return store.state.currentbitrate
            },
            playstatus: function() {
                return store.state.playstatus
            }
        },

	}

</script>

<style lang="scss" scoped>

    @import "./app/src/scss/settings.scss";

    .info-pane-container {
        display: flex;
        flex-grow: 1;
	    background: black;
	    color: $bezel-text-color;
    }

    .info {
        order: 1;
        width: auto;
        flex-grow: 1;
    }

    // ------------------------------------------------
    @keyframes spin {
        from {
            transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
        }
    }
    .play-spinner {
        order: 2;
        animation-name: spin;
        animation-duration: 4000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    // ------------------------------------------------

    .indicators {
        order: 3;
        width: 35px;
    }

    .station-name,
    .current-track {
        @include hideOverflowText;
    }

	.station-name {
		font-size: 12px;
        line-height: 14px;
        width: 80%;
    }

	.current-track {
		font-size: 10px;
	}

    .current-volume {
        font-size: 10px;
        line-height: 14px;
    }

    .current-bitrate {
        font-size: 10px;
    }

</style>