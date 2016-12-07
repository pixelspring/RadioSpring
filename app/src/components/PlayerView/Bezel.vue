
<template>
    <div class="bezel">
        <infopane></infopane>
        <controls></controls>
    </div>
</template>

<script>

    import Infopane from './Infopane'
    import Controls from './Controls'

    export default {

        components: {
            Infopane,
            Controls
        },

        name: 'bezel'

	}

</script>

<style lang="scss">

    @import "./app/src/scss/settings.scss";

    .bezel {
	    padding: 8px 12px;
	    border-radius: 4px;

	    height: $bezel-height;
        display: flex;
        flex-grow: 1;

	    background: black;
	    color: $bezel-text-color;

        &:hover .info-pane-container {
            display: none;
        }

        &:hover .controls-container {
            display: block;
        }

	}

    .controls-container{ 
        display: none;
    }

    

</style>