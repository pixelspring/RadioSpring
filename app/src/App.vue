<template>
    <div class="app">
        <player-view></player-view>
        <list-view></list-view>
    </div>
</template>

<script>
    import PlayerView from './components/PlayerView'
    import ListView from './components/ListView'
    import store from 'src/store/store'

    export default {
        components: {
            PlayerView,
            ListView
        },
        store
    }
</script>


<style lang="scss">

    @import "./app/src/scss/settings.scss";

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    body {
        margin: 0;
        padding: 0;
        
        background: $bg-color;
        color: $body-text-color;
        font-family: -apple-system, BlinkMacSystemFont;

        -webkit-user-select: none;
        -webkit-app-region: drag;

        animation: fadein 1s;
    }

    .app {
        height: 100vh;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-flow: column;
        flex-flow: column;
    }

    // Scrollbars:
    ::-webkit-scrollbar {
        width:  $scrollbar-width;
        height: $scrollbar-width;
    }

    ::-webkit-scrollbar-thumb {
        background: $scrollbar-color;
        // border-radius: $scrollbar-width;
    }

    ::-webkit-scrollbar-track {
        background: $scrollbar-bg;
        // border-radius: $scrollbar-width;
    }

    // Rounded Items:
    .rounded {
        border-radius: 9999px;
    }
    
</style>