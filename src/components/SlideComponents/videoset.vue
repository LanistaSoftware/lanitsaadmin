<template>
        <div class="video ">
            <youtube :video-id="videoId" :player-width="1200" :player-height="600" @ready="ready" @playing="playing">
            </youtube>
            <div class="input-group">
                <label class="label-head" for="videoId">Video ID:</label>
                <button class="btn btn-sm btn-info input-group-text" @click="show=!show"><i
                        class="fas fa-exchange-alt"></i></button>
                <input type="text" class="form-control" id="videoId" placeholder="Username"
                    aria-describedby="inputGroupPrepend3" v-model="videoId" :disabled="!show">
                <button v-show="show" class="btn btn-sm btn-success" @click="updateVideo(videoId),show=!show"
                    :disabled="getterVideoId==videoId">Save <i class="fas fa-save"></i></button>
            </div>

        </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'
    export default {
        data() {
            return {
                videoId: "",
                show: false,
                
            }
        },
        methods: {
            ready(event) {
                this.player = event.target
            },
        
            ...mapActions({
                updateVideo:"updateVideo",
                getVideo:"getVideo",
            }),
            playing() {
                // The player is playing a video.
            },
            change() {
                // when you change the value, the player will also change.
                // If you would like to change `playerVars`, please change it before you change `videoId`.
                // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
                // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
                this.videoId = 'another video id'
            },
            stop() {
                this.player.stopVideo()
            },
            pause() {
                this.player.pauseVideo()
            }
        },
        computed:{
            ...mapGetters({
                getterVideoId:"getterVideoId"
            })
        },
        mounted(){
            this.getVideo().then(()=>{
                this.videoId=this.getterVideoId
              
            })
        }
    }
</script>
<style lang="less">
    .video {
    text-align: center;
    input{
        display: inline-block;
        width: 20rem;
        margin: auto;
    }
    }

    .savebutton{
        padding: 1rem;
    }

    .label-head{
     padding-right: 1rem;
     padding-top: 0.5rem;

    }
    .input-group{
        width: 50%;
        display: flex;
        text-align: center;
        margin-left: 27rem;
        .btn{
            margin: 0;
        }
        
    }
</style>