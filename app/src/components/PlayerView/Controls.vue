<template>
    <div class="controls-container">
        <div class="controls">
            <button id="play_control_button" class="play-control-button" @click="toggleplaying" v-bind:class="{ playing: playstatus }"></button>
            <div id="volume_slider" class="volume-slider">
                <input id="volume_slider" type="range" min="0" max="1" step="0.01" v-model="initialvolumeslidervalue" v-on:input="volupdate">
            </div>
            <button id="show_station_button" class="toggle-list-button" @click="toggleStationList"></button>
        </div>
    </div>
</template>


<script>
    import store from 'src/store/store.js'
    export default {

        created: function () {

            // Add keyboard event listener(s):
            window.addEventListener('keypress', e => {
                if (e.key === 'Space' || e.keyCode === 32) {
                    this.toggleplaying()
                }
            });

        },

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
                    //this.playtoggletext = '▶';
                    player.pause()

                    store.commit('updateplaystatus', {
                      newplaystatus: 0
                    })

                    //store.commit('updatecurrenttrack', {
                    //  newtrack: 'Paused'
                    //})
                } else {
                    // Player is paused
                    //this.playtoggletext = '||';
                    player.play()

                    store.commit('updateplaystatus', {
                      newplaystatus: 1
                    })

                    //store.commit('updatecurrenttrack', {
                    //  newtrack: 'Resuming Play'
                    //})
                }
            },

            toggleStationList
        },

        data () {
            return {
                initialvolumeslidervalue: 1,
                //playtoggletext: '',//this.$store.state.playToggleText,
                //showstationstext: '☰'
            }
        },

        computed: {
            prettyvalue: function () {
                return this.volumeslider * 100
            },
            currentvolume: function() {
                return store.state.currentvolume * 100
            },
            playtoggletext: function() {
                return store.state.playToggleText
            },
            playstatus: function() {
                return store.state.playstatus
            }
        },

    }

    function toggleStationList() {
        const electron = require('electron');
        const win = electron.remote.getCurrentWindow();

        let currentwidth  = window.innerWidth;
        let currentheight = window.innerHeight;
        let playerheight = 53;
        let expandedheight = 243;

        if (currentheight == playerheight) {
            win.setSize(currentwidth, expandedheight, [true])
        } else {
            win.setSize(currentwidth, playerheight, [true])
        }
        
    }

</script>

<style lang="scss" scoped>

    @import "./app/src/scss/settings.scss";

    $volumeSliderheight: 14px;

    .controls-container {
        background: black;
        color: $bezel-text-color;
        width: 100%;
    }

    .controls {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-grow: 1;
        justify-content: space-around;
    }

    button{
        -webkit-appearance: none;
        border: none;
        border-radius: $control-radius;
        outline: 0;

        &:active {
            border: 1px solid $active-color;
        }
    }

    .play-control-button {
        height: 30px;
        width:  50px;
        background: url("../../assets/images/play-icon.svg")
                    center center
                    no-repeat
                    black;
    }

    .playing {
        background: url("../../assets/images/pause-icon.svg")
                    center center
                    no-repeat
                    black;
    }

    .toggle-list-button {
        height: 30px;
        width:  50px;
        background: url("../../assets/images/show-icon.svg")
                    center center
                    no-repeat
                    black;
    }

    .volume-slider {
        font-size: 0px;
        -webkit-app-region: no-drag;
    }

    input[type=range] {
        -webkit-appearance: none;
        background: $bg-color;
    }

    input[type=range]:focus {
        outline: none;
    }

    input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 1px;
        background: $active-color;
    }

    input[type=range]::-webkit-slider-thumb {
        border: 2px solid black;
        height: $volumeSliderheight;
        width:  $volumeSliderheight;
        margin-top: -$volumeSliderheight/2;
        border-radius: 50%;
        background: $active-color;
        -webkit-appearance: none;
    }

    input[type=range]:active::-webkit-slider-runnable-track {
        background: $active-color;
    }

</style>