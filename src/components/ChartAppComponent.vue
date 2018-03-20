<template>
  <div>
    <div class="ui two column grid cards">
      <total :url=this.url type="messages"></total>
      <total :url=this.url type="stickers"></total>
    </div>

    <div class="ui three column grid cards">
      <today type="messages" :url=this.url ></today>
      <today type="stickers" :url=this.url ></today>
      <joined :url=this.url></joined>
      
    </div>

    <div class="ui one column cards grid">
      <div class="card fluid card">
        <div class="content">
          <vue-tabs active-tab-color="#175" 
                    active-text-color="white"
                    type="pills"
                    centered>
            <v-tab title="Daily activity">
              <div class="ui one column cards grid" style="margin-top: 20px;">
                  <chart  label='Messages'
                          :url=this.url
                          chart-id="messages"
                          background-color='rgba(255, 99, 132, 0.2)'
                          border-color='rgba(255,99,132,1)'
                          border-width='1'></chart>
              </div>
              <div class="ui one column cards grid">
                  <chart  label='Stickers'
                          :url=this.url
                          chart-id="stickers"
                          background-color='rgba(152, 99, 132, 0.2)'
                          border-color='rgba(152,99,132,1)'
                          border-width=1></chart>
              </div>            
            </v-tab>

            <v-tab title="User activity">
              <div class="ui one column cards grid">
                <bar  label='Messages'
                      :url=this.url
                      chart-id="top-messages"></bar>
              </div>              

              <div class="ui one column cards grid">
                <bar  label='Stickers'
                      :url=this.url
                      chart-id="top-stickers"></bar>
              </div>              
            </v-tab>
          </vue-tabs>
        </div>
      </div>    
    </div>
  </div>
</template>

<script>
import bar from './BarChartComponent.vue'
import chart from './LineChartComponent.vue';
import today from './TodayCardComponent.vue';
import joined from './JoinedUsersComponent.vue';
import total from './TotalCardComponent.vue';

import axios from 'axios';

import {VueTabs, VTab} from 'vue-nav-tabs'
//you can also import this in your style tag
import 'vue-nav-tabs/themes/vue-tabs.css'

export default {
  inject : [ 'config' ],
  name: 'ChartApp',
  data() {
    return {
        today: {},
        total: {},
        lastUsers: [],
        url: this.config.url,
        chatId: this.$route.params.chatId
    }
  },
  components: {
    VueTabs,
    VTab,
    chart,
    bar,
    today,
    joined,
    total
  }
}
</script>