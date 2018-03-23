<template>
  <div class="card">
        <div class="content">
            <div class="ui statistic">
                <div class="value">
                    {{chatInfo.title}}
                </div>
                <div class="label" v-show="chatInfo.username">
                   <a v-bind:href="'https://t.me/'+ chatInfo.username" v-show="chatInfo.username">@{{ chatInfo.username }}</a>
                </div>
            </div>            
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'chat-info',
    props: ['url'],
    data() {
        return {
            chatInfo: {},
            isBusy: false,
            chatId: this.$route.params.chatId
        }
    },

    mounted: function(){
        this.isBusy = true;
        axios
            .get(this.url + '/api2/chats/' + this.$route.params.chatId)
            .then(({data}) => {
                this.chatInfo = data;
            })
            .catch((err) => {
                this.isBusy = false;
        });
    }
}
</script>

