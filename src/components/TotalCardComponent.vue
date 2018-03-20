<template>
  <div class="card">
        <div class="content">
          <div class="ui statistic">
            <div class="value">
              {{total.total}}
            </div>
            <div class="label">
              Total {{this.type}}
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'total',
    props: ['type', 'url'],
    data() {
        return {
            total: {},
            isBusy: false,
            chatId: this.$route.params.chatId
        }
    },

    mounted: function(){
        this.isBusy = true;
        axios
            .get(this.url + '/api2/' + this.type + '/total/' + this.$route.params.chatId)
            .then(({data}) => {
                this.total = data;
            })
            .catch((err) => {
                console.log(err);
                this.isBusy = false;
        });
    }
}
</script>
