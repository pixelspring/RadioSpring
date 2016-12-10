
<template>
    <div id='visualizer' class="visualizer-container">

        <div class="visualizer playing" v-if="playstatus">
            <div class='bar'></div>
            <div class='bar'></div>
            <div class='bar'></div>
            <div class='bar'></div>
            <div class='bar'></div>
        </div>

        <div class="visualizer idle" v-if="!playstatus">
            <div class='bar-idle'></div>
            <div class='bar-idle'></div>
            <div class='bar-idle'></div>
            <div class='bar-idle'></div>
            <div class='bar-idle'></div>
        </div>

        <div class="visualizer loading" v-if="bufferstatus">
            <div class="spinner"></div>
        </div>
    </div>
</template>

<script>

    import store from 'src/store/store.js'

    export default {

        name: 'visualizer',

        computed: {
            playstatus: function() {
                return store.state.playstatus
            },
            bufferstatus: function() {
                return store.state.bufferstatus
            }
        },

	}

</script>

<style lang="scss">

    @import "./app/src/scss/settings.scss";

    .visualizer-container {
        height: 30px;
        width:  30px;
    }

    .visualizer {
        height: 30px;
        width:  30px;
        position: relative;
    }

    // IDLE STATE:
    .idle {}

        .bar-idle {
            background: $bezel-text-color;
            bottom: 0;
            position: absolute;
            width: 2px;
            opacity: 0.3;   
            &:nth-child(1)  { left: 1px;  height: 16px }
            &:nth-child(2)  { left: 5px;  height: 8px }
            &:nth-child(3)  { left: 9px;  height: 28px }
            &:nth-child(4)  { left: 13px; height: 20px }
            &:nth-child(5)  { left: 17px; height: 7px }
        }

    // PLAYING ANIMATION:
    .bar {
        background: $bezel-text-color;
        bottom: 0;
        position: absolute;
        width: 2px;      
        animation: soundbars 0ms -800ms linear infinite alternate;
    }

    @keyframes soundbars {
        0% {
            opacity: .5;
            height: 3px;
        }
        100% {
            opacity: 1;       
            height: 28px;       
        }
    }

    .bar:nth-child(1)  { left: 1px;  animation-duration: 574ms; }
    .bar:nth-child(2)  { left: 5px;  animation-duration: 533ms; }
    .bar:nth-child(3)  { left: 9px;  animation-duration: 507ms; }
    .bar:nth-child(4)  { left: 13px; animation-duration: 558ms; }
    .bar:nth-child(5)  { left: 17px; animation-duration: 500ms; }

    // LOADING INDICATOR:
    .spinner {
        background: black;
        border-radius: 50%;
        width:  20px;
        height: 20px;
        border: 2px solid #1C3143;
        border-top-color: $bezel-text-color;
        animation: spin 1s infinite ease-in-out;
        position: absolute;
        top: 6px;
        z-index: 100;
    }

    @keyframes spin {
      0%    { transform: rotate(0deg); }
      100%  { transform: rotate(360deg); }
    }

</style>