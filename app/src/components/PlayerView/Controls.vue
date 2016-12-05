

<template>
    <div class="control-container">
        <div class="controls">
            <button id="play_control_button" class="play-control-button" @click="toggleplaying" v-bind:class="{ playing: playstatus }"></button>
            <div id="volume_slider" class="volume-slider">
                <input id="volume_slider" type="range" min="0" max="1" step="0.01" v-model="initialvolumeslidervalue" v-on:input="volupdate">
            </div>
        </div>

        <div class="expand-container">
            <button id="show_station_button" class="toggle-list-button" @click="showStationList"></button>
        </div>
    </div>
</template>


<script>
    import store from 'src/store/store.js'
    export default {

        /*watch: {
            
            'playstatus': function(value) {
                console.log("PLAYSTATUS VALUE: " + value)
                if(value) {
                    //this.playtoggletext = '▶';
                } else {
                    //this.playtoggletext = '||';
                }
            }

        },*/

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
                } else {
                    // Player is paused
                    //this.playtoggletext = '||';
                    player.play()

                    store.commit('updateplaystatus', {
                      newplaystatus: 1
                    })
                }
            },

            showStationList
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

    function showStationList() {
        const electron = require('electron');
        const win = electron.remote.getCurrentWindow();
        win.setSize(500, 240, [true])
    }

</script>

<style lang="scss" scoped>

    @import "./app/src/scss/settings.scss";

    $volumeSliderheight: 8px;

    .controls {
        margin-left: 16px;
        height: $bezel-height;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .control-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .expand-container {
        margin-left: 8px;
    }

    button{
        -webkit-appearance: none;
        border: none;
        background: $control-bg-color;
        color: $control-color;
        border-radius: $control-radius;
        outline: 0;

        &:active {
            background-color: $active-color;
        }
    }

    .play-control-button {
        height: 25px;
        width: 55px;
        //background: #000000 url("../../assets/images/pause-icon.svg") 10px 20px/50px 50px;
        background: url("../../assets/images/play-icon.svg")
                    center center
                    no-repeat
                    black;
    }

    .playing {
        //background: #000000 url("../../assets/images/play-icon.svg") 10px 20px/50px 50px;
        background: url("../../assets/images/pause-icon.svg")
                    center center
                    no-repeat
                    black;
    }

    .toggle-list-button {
        height: 44px;
        width: 25px;
        background: url("../../assets/images/show-icon.svg")
                    center center
                    no-repeat
                    black;
    }

    .volume-slider {
        font-size: 10px;
    }

    input[type=range] {
        -webkit-appearance: none;
        width: 55px;
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