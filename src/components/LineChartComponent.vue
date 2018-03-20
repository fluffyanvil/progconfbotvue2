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
        name: 'chart',
        props: ['chartdata', 'label', 'url', 'chartId', 'backgroundColor', 'borderColor', 'borderWidth', 'type'],
        data: function () {
            return {
                localChartData: this.chartData,
                isBusy: false
            }
        },
        methods: {
            load: function () {
                var data = this.localChartData;
                var ctx = document.getElementById(this.chartId).getContext('2d');
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: data.map(function (item) {
                            return item.day;
                        }),
                        datasets: [{
                            label: this.label,
                            data: data.map(function (item) {
                                return item.count;
                            }),
                            backgroundColor: this.backgroundColor,
                            borderColor: this.borderColor,
                            borderWidth: this.borderWidth
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }],
                            xAxes: [{
                                time: {
                                    unit: 'day'
                                }
                            }]
                        }
                    }
                });
            }
        },
        mounted: function(){
            this.isBusy = true;
            axios
                .get(this.url + '/api2/'+ this.label +'/trend/' + this.$route.params.chatId)
                .then(({data}) => {
                    this.localChartData = data;
                    this.load();
                    this.isBusy = false;
                })
                .catch((err) => {
                    console.log(err);
                    this.isBusy = false;
            });
        }
    }
</script>