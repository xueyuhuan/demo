<template>
    <div class="funnel">
        <div id="funnel">

        </div>
    </div>
</template>

<script>
    export default {
        name: "Funnel",
        mounted(){
            this.drawLine();
        },
        methods:{
            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('funnel'))
                // 绘制图表
                myChart.setOption({
                    color:['#ff6c00','#00d2ff','#ffd800','#0645cd'],
                    legend: {
                        orient:'vertical',
                        top: 50,
                        right:70,
                        itemGap:30,
                        itemWidth:12,
                        itemHeight:12,
                        textStyle:{color:'#eee'},
                        data:['尖','峰','平','谷']
                    },
                    series : [
                        {
                            name: '预期',
                            type: 'funnel',
                            left: '10%',
                            width: '390',
                            sort:'ascending',
                            itemStyle: {
                                borderWidth:0
                            },
                            label:{
                                show:false
                            },
                            labelLine:{
                                show:false
                            },
                            emphasis:{
                                label:{
                                    show:false
                                }
                            },
                            data: [
                                {value: 80, name: '谷'},
                                {value: 60, name: '平'},
                                {value: 40, name: '峰'},
                                {value: 20, name: '尖'},
                            ]
                        },
                        {
                            name: '实际',
                            type: 'funnel',
                            left: '10%',
                            maxSize: '80%',
                            width: '390',
                            sort:'ascending',
                            label: {
                                normal: {
                                    position: 'inside',
                                    formatter: '{c}%',
                                    textStyle: {
                                        color: '#fff'
                                    }
                                },
                            },
                            itemStyle: {
                                normal: {
                                    opacity: 0,
                                }
                            },
                            data: [
                                {value: 40, name: '谷'},
                                {value: 35, name: '平'},
                                {value: 0, name: '峰'},
                                {value: 0, name: '尖'},
                            ]
                        }
                    ],
                });
            }
        }
    }
</script>

<style lang="scss">
    .funnel{
        width: 600px;
        height: 420px;
        background: #161a3c;
        #funnel{
            width: 100%;
            height: 100%;
        }
    }

</style>
