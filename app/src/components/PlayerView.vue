
<template>
    <div id="player_container" class="player-container">
        <bezel></bezel>
        <controls></controls>
        <audio-element></audio-element>
    </div>
</template>

<script>
    import Bezel from './PlayerView/Bezel'
    import Controls from './PlayerView/Controls'
    import AudioElement from './PlayerView/AudioElement'

    export default {
        components: {
            Bezel,
            Controls,
            AudioElement
        },
        name: 'player-view'
    }
</script>



<style lang="scss" scoped>

    @import "./app/src/scss/settings.scss";

    .player-container {
        display: flex;
        flex-wrap: wrap;
        margin: 5px 10px 5px 80px;
        min-height: 43px;
    }

</style>
