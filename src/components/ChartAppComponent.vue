<template>
  <div>
  <div class="ui two column grid cards">
    <div class="card">
      <div class="content">
        <div class="ui statistic">
          <div class="value">
            {{total.messagesTotal}}
          </div>
          <div class="label">
            Total messages
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <div class="ui statistic">
          <div class="value">
            {{total.stickersTotal}}
          </div>
          <div class="label">
            Total stickers
          </div>
        </div>
      </div>
    </div>
</div>

<div class="ui three column grid cards">
    <div class="card">
      <div class="content">
        <div class="ui statistic">
          <div class="value">
            {{today.todayMessagesTotal}}
          </div>
          <div class="label">
            Today messages
          </div>
        </div>
        <div class="description">
          {{today.messagesDirection}}{{today.messagePercentage}}% of {{today.yesterdayMessagesTotal}} yesterday
        </div>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <div class="ui statistic">
          <div class="value">
            {{today.todayStickersTotal}}
          </div>
          <div class="label">
            Today stickers
          </div>
        </div>
        <div class="description">
          {{today.stickersDirection}}{{today.stickerPercentage}}% of {{today.yesterdayStickersTotal}} yesterday
        </div>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <div class="header">5 last joined users:</div>
        <div class="description">          
          <div class="left aligned column">
            <div class="ui vertical fluid menu" v-for="user in lastUsers" v-bind:key="user.firstName">
              <div class="header item">
              {{ user.firstName }}
              </div>              
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

<div class="ui one column cards grid">
  <chart  label='Messages'
            api-url='http://progconfbot.herokuapp.com/api/m/'
            chart-id="messages"
            background-color='rgba(255, 99, 132, 0.2)'
            border-color='rgba(255,99,132,1)'
            border-width='1'></chart>
</div>

<div class="ui one column cards grid">
        <chart label='Stickers'
            api-url='http://progconfbot.herokuapp.com/api/s/'
            chart-id="stickers"
            background-color='rgba(152, 99, 132, 0.2)'
            border-color='rgba(152,99,132,1)'
            border-width=1></chart>
</div>

<div class="ui one column cards grid">
  <bar label='Messages'
            api-url='http://progconfbot.herokuapp.com/api/top/m/'
            chart-id="top-messages"></bar>
</div>   

<div class="ui one column cards grid">
  <bar label='Stickers'
            api-url='http://progconfbot.herokuapp.com/api/top/s/'
            chart-id="top-stickers"></bar>
</div>  
    
    

    
  </div>
</template>



<script>
import bar from './BarChartComponent.vue'
import chart from './LineChartComponent.vue';
import axios from 'axios';
export default {
  name: 'ChartApp',
  data() {
      console.log("ChartApp");
    return {
        today: {},
        total: {},
        lastUsers: [],
        chatId: this.$route.params.chatId
    }
  },
  components: {
      chart, bar
  },

  methods: {
      updateToday: function () {
          axios
              .get('http://progconfbot.herokuapp.com/api/today/' + this.chatId)
              .then(({data}) => {
                this.today = data;
              })
              .catch((err) => {console.log(err)});
      },
      updateTotal: function () {
          axios
              .get('http://progconfbot.herokuapp.com/api/total/' + this.chatId)
              .then(({data}) => {
                this.total = data;
              }).catch((err) => {console.log(err)});
      },
      updateLastUsers: function() {
          axios
              .get('http://progconfbot.herokuapp.com/api/users/last/' + this.chatId)
              .then(({data}) => {
              this.lastUsers = data;
              }).catch((err) => {console.log(err)});
      }
  },
  created: function(){
      this.updateToday();
      this.updateTotal();
      this.updateLastUsers();
  },
  mounted: function() {
    $('.tabular.menu .item').tab();
  }
}
</script>