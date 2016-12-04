<template>
    <div id="station_list" class="station-list">
        <table>
            <thead>
                <tr>
                    <th>♡</th>
                    <th>Title</th>
                    <th>Stream Url</th>
                    <th>Website</th>
                    <th>✘</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="s in streamlist" @click.prevent="stream(s.name, s.url, s.web)">
                    <td>♡</td>
                    <td>{{ s.name }}</td>
                    <td>{{ s.url }}</td>
                    <td>{{ s.web }}</td>
                    <td>✘</td>
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
                    if (player.paused == true) { 
                        // User pressed "pause" button on player
                        player.play()
                        } else { 
                        // Presume user wants to pause current stream
                        player.pause()
                        this.isPlaying = undefined
                        store.commit('updateplaystatus', {
                          newplaystatus: 0
                        }) 
                    }
                } else { 
                    // User clicked on stream which is not currently playing
                    player.src = url

                    store.commit('updatecurrentstreamurl', {
                      newstreamurl: url
                    })

                    player.play()
                    //currentstation = name
                    //store.commit('updatecurrentstation', name)
                    store.commit('updatecurrentstation', {
                      newstation: name
                    })
                    this.isPlaying = url
                    store.commit('updateplaystatus', {
                      newplaystatus: 1
                    })
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

    $scrollable-table-height: 160px;

    .station-list {
        
    }

    thead, tbody, tr, td, th { display: block; }

    table {
        width: 100vw;
        font-size: 12px;
        border: 0;
        border-collapse: collapse;
        border-spacing: 0;
        cursor: default;
        white-space: nowrap;
        text-overflow: clip;

        table-layout: fixed;
        width: 100%;
    }

    th,
    tf {
        text-transform: uppercase;
        background: black;
        font-size: 10px;
        height: 26px;
    }

    th,
    td {
        padding: 7px;
        text-align: left;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    tbody {
        height: $scrollable-table-height;
        overflow-y: auto;
    }

    tbody tr {
        background: #424242;
        border-bottom: 1px solid #444;
    }

    tbody tr:nth-child(odd) {
        background-color: #3C3C3C;
    }

    td:nth-child(1), th:nth-child(1) { width: 5% }
    td:nth-child(2), th:nth-child(2) { width: 25% }
    td:nth-child(3), th:nth-child(3) { width: 40% }
    td:nth-child(4), th:nth-child(4) { width: 25% }
    td:nth-child(5), th:nth-child(5) { width: 5% }

    
    tr:after {
        content: ' ';
        display: block;
        visibility: hidden;
        clear: both;
    }

    tbody td, thead th {
        float: left;
    }

</style>
