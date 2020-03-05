<template>
        
        <div class="video mt-3">
            <youtube :video-id="videoId" :player-width="400" @ready="ready" @playing="playing" ></youtube>
            <!-- <iframe :width="560" height="315" src="https://www.youtube.com/embed/o0bSRbBk8hk" frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" class="p-5" allowfullscreen>
            </iframe> -->
            <strong>Video ID:</strong>
            <button class="btn btn-sm btn-info mt-3" @click="show=!show"><i class="fas fa-exchange-alt"></i></button>
            <p v-if="!show"><span>{{videoId}}</span></p>
            <div style="width:100%">
            <div class="inputid">
            <input class="form-control" type="text" v-if="show" placeholder="VideoID" v-model="videoId">
            </div>
            <div class="savebutton">
                <button v-show="show" class="btn btn-sm btn-success ">Save</button>
            </div>
            </div> 
        </div>
</template>
<script>
    export default {
        data() {
            return {
                videoId: "eWAHgwBBLoU",
                show: false,
                width:'75%'
            }
        },
        methods: {
            ready(event) {
                this.player = event.target
            },
            playing(event) {
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
        }
    }
</script>
<style lang="less">
    .video {
    width: 25%;
    margin-top:2rem ;
    display: inline-block;

    }
    .inputid{
        width: 80%;
        padding: 1rem;
        float: left;
    }
    .savebutton{
        width: 20%;
        float: left;
        padding: 1rem;
    }

</style>