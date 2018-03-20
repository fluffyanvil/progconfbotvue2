<template>
    <div class="card">
        <div class="content">
            <div class="header">5 last joined users:</div>
            <div class="description">          
            <div class="left aligned column">
                <div class="ui vertical fluid menu" v-for="user in users" v-bind:key="user.firstName">
                <div class="header item">
                {{ user.firstName }} <a v-bind:href="'https://t.me/'+ user.username" v-show="user.username">@{{ user.username }}</a>
                </div>              
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'joined',
    props: ['url'],
    data() {
        return {
            users: [],
            isBusy: false,
            chatId: this.$route.params.chatId
        }
    },

    mounted: function(){
        this.isBusy = true;
        axios
            .get(this.url + '/api2/users/last/' + this.$route.params.chatId)
            .then(({data}) => {
                this.users = data;
            })
            .catch((err) => {
                console.log(err);
                this.isBusy = false;
        });
    }
}
</script>
