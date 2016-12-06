
<template>
    <div id="windowControls" class="window-controls">
        <button class="window-control window-control-close" id="close" @click="closeWindow"></button>
        <button class="window-control window-control-minimize" id="minimize" @click="minimizeWindow"></button>
        <button class="window-control window-control-maximize" id="maximize" @click="maximizeWindow"></button>
    </div>
</template>

<script>
    // import X from './Folder/X'

    const electron = require('electron');
    const win = electron.remote.getCurrentWindow();

    export default {
        components: {
            //
        },
        name: 'window-controls',

        methods: {

            closeWindow: function() {
                win.minimize();
            },
            minimizeWindow: function() {
                win.minimize();
            },
            maximizeWindow: function() {
                if (!win.isMaximized()) {
                    win.maximize();
                } else {
                    win.unmaximize();
                }       
            },
        }

    }

    window.onfocus = function() {
       console.log("FOCUSED")
       windowControls.classList.add('focus');
    };

    window.onblur = function() {
       console.log("BLURRED")
       windowControls.classList.remove('focus');
    };

</script>

<style lang="scss" scoped>

    @import "./app/src/scss/settings.scss";

    $close-red:                     #ff6159;
    $close-red-active:              #bf4942;
    $close-red-icon:                #4d0000;
    $close-red-icon-active:         #190000;

    $minimize-yellow:               #ffbd2e;
    $minimize-yellow-active:        #bf8e22;
    $minimize-yellow-icon:          #995700;
    $minimize-yellow-icon-active:   #592800;

    $maximize-green:                #28c941;
    $maximize-green-active:         #1d9730;
    $maximize-green-icon:           #006500;
    $maximize-green-icon-active:    #003200;

    $disabled-gray:                 #ddd;

    .window-controls {
        // position: absolute;
        top: 1px;
        left: 8px;


        &.focus, 
        &:hover, 
        &:active {
            > .window-control-close {
                background-color: $close-red;

                &:active:hover {
                    background-color: $close-red-active;
                }
            }
            > .window-control-minimize {
                background-color: $minimize-yellow;

                &:active:hover {
                    background-color: $minimize-yellow-active;
                }
            }
            > .window-control-maximize {
                background-color: $maximize-green;

                &:active:hover {
                    background-color: $maximize-green-active;
                }
            }
        }

        > .window-control {
            &:before, &:after {
                visibility: hidden;
            }
        }

        &:hover, &:active {
            > .window-control {
                &:before, &:after {
                    visibility: visible;
                }
            }
        }
    }

    .window-control {
        border-radius: 100%;
        padding: 0;
        height: 12px;
        width: 12px;
        border: 1px solid rgba(0, 0, 0, 0.06);
        box-sizing: border-box;
        margin-right: 3.5px;
        background-color: $disabled-gray;
        position: relative;
        outline: none;

        &:before, &:after {
            content: '';
            position: absolute;
            border-radius: 1px;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            margin: auto;
        }

        &-close {
            &:before, &:after {
                background-color: $close-red-icon;
                width: 8px;
                height: 1px;
            }
            &:before {
                transform: rotate(45deg);// translate(-0.5px, -0.5px);
            }
            &:after {
                transform: rotate(-45deg);// translate(0.5px, -0.5px);
            }
            &:active:hover:before, &:active:hover:after {
                background-color: $close-red-icon-active;
            }
        }

        &-minimize {
            &:before {
                background-color: $minimize-yellow-icon;
                width: 8px;
                height: 1px;
                //transform: translateY(-0.5px);
            }
            &:active:hover:before {
                background-color: $minimize-yellow-icon-active;
            }
        }

        &-maximize {
            &:before {
                background-color: $maximize-green-icon;
                width: 6px;
                height: 6px;
            }
            &:after {
                background-color: $maximize-green;
                width: 10px;
                height: 2px;
                transform: rotate(45deg);
            }
            &:active:hover:before {
                background-color: $maximize-green-icon-active;
            }
            &:active:hover:after {
                background-color: $maximize-green-active;
            }
        }
    }

</style>
