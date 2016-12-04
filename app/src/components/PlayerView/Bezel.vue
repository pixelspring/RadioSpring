
<template>
    <div class="bezel">
      	<div class="info">
    		<div id="stationName" class="station-name">{{currentstation}} <span v-if="currentstationdesc !== undefined"> - {{currentstationdesc}}</span></div>
    		<div id="currentTrack" class="current-track">{{currenttrack}}</div>
    	</div>
        <div class="indicators">
            <div id="currentVolume" class="current-volume">&#128264; {{currentvolume.toFixed()}}</div>
            <div id="currentVolume" class="current-volume">{{currentbitrate}}Kbs</div>
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
            }
        },

	}

</script>

<style lang="scss" scoped>

    @import "./app/src/scss/settings.scss";

    .bezel {
	    padding: 8px 12px;
	    border-radius: 4px;

	    height: $bezel-height;
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
        order: 2;
        width: 35px;
    }

    .station-name,
    .current-track {
        @include hideOverflowText;
    }

	.station-name {
		font-size: 12px;
        width: 80%;
	}

	.current-track {
		font-size: 10px;
	}

    .current-volume {
        font-size: 10px;
    }

</style>