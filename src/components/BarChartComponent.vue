<template>
  <div class="card fluid card">
    <div class="content">
        <div class="ui active inverted dimmer" v-show="isBusy">
            <div class="ui text loader">Loading</div>
        </div>
      <canvas :id=chartId></canvas>
    </div>
  </div>  
</template>

<script>
    import Chart from 'chart.js'
    import axios from 'axios';
    export default {
        name: 'bar',
        props: ['chartdata', 'label', 'apiUrl', 'chartId'],
                data: function () {
                    return {
                        localChartData: this.chartData,
                        isBusy: false
                    }
                },
                methods: {
                    load: function () {
                        var data = this.localChartData.data;
                        var ctx = document.getElementById(this.chartId).getContext('2d');
                        new Chart(ctx, {
                            type: 'horizontalBar',
                            data: {
                                labels: data.map(function (item) {
                                    return `${item.firstName === null ? '' : item.firstName} ${item.lastName === null ? '' : item.lastName}`;
                                }),
                                datasets: [{
                                    label: this.label,
                                    data: data.map(function (item) {
                                        return item.count;
                                    }),
                                    backgroundColor: data.map(function (item) {
                                        var letters = '0123456789ABCDEF'.split('');
                                        var color = '#';
                                        for (var i = 0; i < 6; i++) {
                                            color += letters[Math.floor(Math.random() * 16)];
                                        }
                                        return color;
                                    })
                                }]
                            }
                        });
                    }
                },
                mounted: function () {
                    this.isBusy = true;
                    axios
                        .get(this.apiUrl + this.$route.params.chatId)
                        .then(({data}) => {
                            this.localChartData = data;
                            this.load();
                            this.isBusy = false;
                        })
                        .catch((err) => {
                            console.log(err);
                            this.isBusy = true;
                        });
                }
    }
</script>