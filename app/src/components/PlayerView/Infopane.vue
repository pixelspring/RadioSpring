
<template>
    <div class="info-pane-container">
      	<visualizer></visualizer>
        <div class="info">
    		<div id="stationName" class="station-name">{{currentstation}} <span v-if="currentstationdesc !== undefined"> - {{currentstationdesc}}</span></div>
            <transition-group appear name="fade" mode="in-out">
                <div id="currentTrack" class="current-track" key="load" v-show="bufferstatus">Loading...</div>
                <div id="currentTrack" class="current-track" key="track" v-show="!bufferstatus">{{currenttrack}}</div>
            </transition-group>
    	</div>
        <div class="indicators">
            <div id="currentVolume" class="current-volume"><img src="../../assets/images/volume-icon.svg"> {{currentvolume.toFixed()}}</div>
            <div id="currentBitrate" class="current-bitrate" v-if="currentbitrate !== undefined"><img src="../../assets/images/download-icon.svg">  {{currentbitrate}}</div>
        </div>
    </div>
</template>

<script>

	import store from 'src/store/store.js'
    import Visualizer from './Visualizer'

    export default {

        components: {
            Visualizer
        },

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
            bufferstatus: function() {
                return store.state.bufferstatus
            }
        },

	}

</script>

<style lang="scss" scoped>

    @import "./app/src/scss/settings.scss";

    @include fadeTransition;

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
        position: absolute;
	}

    .current-volume {
        font-size: 10px;
        line-height: 14px;
    }

    .current-bitrate {
        font-size: 10px;
    }

</style>