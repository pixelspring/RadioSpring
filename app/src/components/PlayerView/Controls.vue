

<template>
    <div class="controls">

        <button id="play_control_button" class="play-control-button" @click="toggleplaying">{{playtoggletext}}</button>
        <button id="show_station_button" @click="showStationList">{{showstationstext}}</button>
        
        <div id="volume_slider" class="volume-slider">
            <input id="volume_slider" type="range" min="0" max="1" step="0.01" v-model="initialvolumeslidervalue" v-on:input="volupdate">
        </div>
    </div> 
</template>


<script>
    import store from 'src/store/store.js'
    export default {

        methods: {

            volupdate: function(e) {

                player.volume = e.target.value

                store.commit('updatevolume', {
                  newvolume: e.target.value
                })

            },

            toggleplaying: function() {
                if (player.duration > 0 && !player.paused) {
                    // Player is playing
                    this.playtoggletext = '▶';
                    player.pause()
                } else {
                    // Player is paused
                    this.playtoggletext = '||';
                    player.play()
                }
            },

            showStationList
        },

        data () {
            return {
                initialvolumeslidervalue: 1,
                playtoggletext: this.$store.state.playToggleText,
                showstationstext: 'Stationlist'
            }
        },

        computed: {
            prettyvalue: function () {
                return this.volumeslider * 100
            },
            currentvolume: function() {
                return store.state.currentvolume * 100
            }
        },

    }

    function showStationList() {
        const electron = require('electron');
        const win = electron.remote.getCurrentWindow();
        win.setSize(500, 250, [true])
    }

</script>

<style lang="scss" scoped>

    @import "./app/src/scss/settings.scss";

    $volumeSliderheight: 8px;

    .controls {
        margin-left: 16px;
    }

    button {
        -webkit-appearance: none;
        border: none;
        background: $control-bg-color;
        color: $control-color;
        //padding: 5px;
        border-radius: $control-radius;
        outline: 0;
        height: 25px;
        width: 75px;

        &:active {
            background: $active-color;
        }
    }

    .play-control-button {
        //width: 50px;
    }

    .volume-slider {
        font-size: 10px;
    }

    input[type=range] {
        -webkit-appearance: none;
        width: 100px;
        background: $bg-color;
    }
    input[type=range]:focus {
        outline: none;
    }
    input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: $volumeSliderheight;
        box-shadow: 0px 0px 0px #000000;
        background: black;
        border-radius: 50px;
        border: 0px solid #000000;
    }
    input[type=range]::-webkit-slider-thumb {
        box-shadow: 0px 0px 0px #000000;
        border: 1px solid $active-color;
        height: $volumeSliderheight;
        width:  $volumeSliderheight;
        border-radius: 50px;
        background: $bg-color;
        -webkit-appearance: none;
    }
    input[type=range]:active::-webkit-slider-runnable-track {
        background: $active-color;
    }

    .volume-display {
        width: 20px;
        padding-left: 8px;
    }

</style>