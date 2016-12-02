<template>
    <div id="station_list" class="station-list">
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Stream Url</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="s in streamlist" @click.prevent="stream(s.name, s.url, s.web)">
                    <td>{{ s.name }}</td>
                    <td>{{ s.url }}</td>
                    <td>{{ s.web }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    //console.log(store.volumeSlider)
    //console.log(store.playToggleText)
    //console.log(store.streams)

    import store from 'src/store/store.js'

    export default {

        name: 'container-view',

        components: {
            //COMPONENT
        },
 
        methods: {

            stream: function(name, url, web) {

                if (this.currently_playing == url) {
                    if (layer.paused == true) { 
                        // User pressed "pause" button on player
                        player.play()
                        } else { 
                        // Presume user wants to pause current stream
                        player.pause()
                        this.isPlaying = undefined 
                    }
                } else { 
                    // User clicked on stream which is not currently playing
                    player.src = url
                    player.play()
                    //currentstation = name
                    //store.commit('updatecurrentstation', name)
                    store.commit('updatecurrentstation', {
                      newstation: name
                    })
                    this.isPlaying = url
                    //station_web.innerHTML = '<p><a href="' + web + '" class="pure-button">' + name + ' Website</a></p>'
                }

            },
        },

        data () {
            return {
                streamlist: this.$store.state.streams,
            }
        },

        computed: {
            streams(){
              //return this.$store.getters.streams
            }
        }

    }

</script>



<style lang="scss" scoped>

    @import "./app/src/scss/settings.scss";

    .station-list {
        
    }

    table {
        width: 100vw;
        font-size: 12px;
        border: 0;
        border-collapse: collapse;
        border-spacing: 0;
    }

    th,
    tf {
        text-transform: uppercase;
        background: black;
        font-size: 10px;
    }

    th,
    td {
        padding: 7px;
        text-align: left;

    }

    tbody tr {
        background: #424242;
        border-bottom: 1px solid #444;
    }

    tbody tr:nth-child(odd) {
        background-color: #3C3C3C;
    }

// -----------------------

thead, tbody, tr, td, th { display: block; }

tr:after {
    content: ' ';
    display: block;
    visibility: hidden;
    clear: both;
}

thead th {
    height: 26px;
}

tbody {
    height: 200px;
    overflow-y: auto;
}

thead {
    /* fallback */
}


tbody td, thead th {
    //width: 33.333333%;
    float: left;
}

td:nth-child(1), th:nth-child(1) { width: 25% }
td:nth-child(2), th:nth-child(2) { width: 50% }
td:nth-child(3), th:nth-child(3) { width: 25% }

</style>
