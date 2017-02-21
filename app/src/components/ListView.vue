
<template>
    <div class="grid-block">
        <main>
            <div id="list_container" class="list-container">
                <station-list></station-list>
            </div>
        </main>
    </div>

</template>

<script>
    import Database from 'src/lib/Database.js'

    import StationList from './ListView/StationList'

    export default {
        components: {
            StationList
        },
        name: 'list-view'
    }
</script>



<style lang="scss" scoped>

    @import "./app/src/scss/settings.scss";

    .grid-block {
        display: flex;
        height: auto;
        position: relative;
        overflow: hidden;
        backface-visibility: hidden;
        flex: 1 1 auto;
        flex-flow: row wrap;
        flex-wrap: nowrap;
        align-items: stretch;
        justify-content: flex-start;
        order: 0;
        overflow-y: auto;
    }

    main {
        flex: 1;
        overflow-y: auto;
    }

    .list-container {
        display: flex;
        height: auto;
        position: relative;
        overflow: hidden;
        backface-visibility: hidden;
        flex: 1 1 auto;
        flex-flow: row wrap;
        flex-wrap: nowrap;
        align-items: stretch;
        justify-content: flex-start;
        order: 0;
        overflow-y: auto;

        background: $listcontainer-bg;
    }

</style>
