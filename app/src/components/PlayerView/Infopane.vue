
<template>

    <table class="info-pane-container" cellspacing="0" cellpadding="0">
        <tr>
            <td class="visualizer" rowspan="2"><visualizer></visualizer></td>
            <td class="station-name">{{currentstation}} <span v-if="currentstationdesc !== undefined"> - {{currentstationdesc}}</span></td>
            <td class="indicators current-volume"><img src="../../assets/images/volume-icon.svg"> {{currentvolume.toFixed()}}</td>
        </tr>

        <tr>
            <td class="track-title">
                <transition-group appear name="fade">
                    <span class="current-track loading" key="load" v-show="bufferstatus">Loading...</span>
                    <span class="current-track" key="track" v-show="!bufferstatus">{{currenttrack}}</span>
                </transition-group>
            </td>
            <td class="indicators current-bitrate"><img src="../../assets/images/download-icon.svg">  {{currentbitrate}}</td>
        </tr>
    </table> 

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

    table {
        width: 100%;
        color: $bezel-text-color;
        background: black;
    }
    tr,
    td {
        padding: 0;
    }
    tr {
        height: 15px;
    }
    td {
        max-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .visualizer {
        width: 30px;
        height: 30px;
        font-size: 10px;
    }

    .station-name {
        font-size: 12px;
    }

    .current-track {
        font-size: 10px;
        position: absolute;
        top: 32px;
    }

    .indicators {
        width: 40px;
        padding-left: 6px;
    }

    .current-volume {
        font-size: 10px;
    }

    .current-bitrate {
        font-size: 10px;
    }

</style>