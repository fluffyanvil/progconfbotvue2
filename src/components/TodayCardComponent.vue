<template>
    <div class="card">
        <div class="content">
            <div class="ui statistic">
            <div class="value">
                {{today.todayCount}}
            </div>
            <div class="label">
                Today {{this.type}}
            </div>
            </div>
            <div class="description">
                <i class="arrow up icon" v-if="today.trend == 1"></i>
                <i class="arrow down icon" v-if="today.trend == -1"></i>
                {{today.percentage}}% of {{today.yesterdayCount}} yesterday
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'today',
    props: ['type', 'url'],
    data() {
        return {
            today: {},
            isBusy: false,
            chatId: this.$route.params.chatId
        }
    },

    mounted: function(){
        this.isBusy = true;
        axios
            .get(this.url + '/api2/' + this.type + '/stat/' + this.$route.params.chatId)
            .then(({data}) => {
                this.today = data;
            })
            .catch((err) => {
                console.log(err);
                this.isBusy = false;
        });
    }
}
</script>

