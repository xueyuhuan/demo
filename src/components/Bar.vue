<template>
    <div class="bar">
        <div id="bar1"></div>
        <div id="bar2"></div>
    </div>
</template>

<script>
    export default {
        name: "Bar",
        data () {
            return {
                valueLeft:[68,78,88,98],
                valueRight:[43,54,23,16],
            }
        },
        mounted(){
            this.drawLeft();
            this.drawRight();
        },
        methods: {
            drawLeft(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('bar1'))
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: '金 额(元)',
                        top:5,
                        x:'center',
                        textStyle:{
                            fontSize:14,
                            fontWeight:500,
                            color:'#eee',
                        },
                    },
                    //网格位置
                    grid: {
                        width:250,
                        top:36,
                        right:30,
                        bottom:10,
                    },
                    xAxis: {
                        type: "value",
                        show:false,
                        inverse:true,
                    },
                    yAxis: {
                        type: "category",
                        position:"right",
                        inverse:true,
                        axisLine:{//坐标轴线
                            show:false
                        },
                        axisTick:{//坐标轴刻度
                            show:false,
                        },
                        axisLabel:{//坐标轴文字
                            height:60,
                            color:'#eee',
                            fontSize:12,
                        },
                        data:['尖','峰','平','谷']
                    },
                    series: [
                        {
                            type: "bar",
                            label:{
                                show:true,
                                position:'left',
                                formatter:'{c}',
                            },
                            itemStyle:{
                              normal:{
                                  color:function (col) {
                                      let colorList=['#0645cd','#ffd800','#00d2ff','#ff6c00'];
                                      return colorList[col.dataIndex];
                                  }
                              }
                            },
                            barWidth: 18,  //柱状图宽度
                            barGap: 46,  //设置同一类中两个柱状图的距离
                            data: this.valueLeft,
                        }
                    ]
                });
            },
            drawRight(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('bar2'))
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: '电 量(kWh)',
                        top:5,
                        x:'center',
                        textStyle:{
                            fontSize:14,
                            fontWeight:500,
                            color:'#eee',
                        },
                    },
                    //网格位置
                    grid: {
                        show:false,
                        width:250,
                        top:36,
                        bottom:10,
                        left:0,
                    },
                    xAxis: {
                        type: "value",
                        show:false,
                    },
                    yAxis: {
                        type: "category",
                        show:false,
                        position:"left",
                        inverse:true,
                    },
                    series: [
                        {
                            type: "bar",
                            label:{
                                show:true,
                                position:'right',
                                formatter:'{c}',
                            },
                            itemStyle:{
                                normal:{
                                    color:function (col) {
                                        let colorList=['#0645cd','#ffd800','#00d2ff','#ff6c00'];
                                        return colorList[col.dataIndex];
                                    }
                                }
                            },
                            barWidth: 18,  //柱状图宽度
                            barGap: 46,  //设置同一类中两个柱状图的距离
                            data: this.valueRight,
                        }
                    ]
                });
            }
        }
    }
</script>

<style lang="scss">
    .bar{
        @include flex(space-between);
        width: 700px;
        height: 260px;
        background: #161a3c;
        #bar1{
            flex: 0 0 380px;
            height: 100%;
        }
        #bar2{
            flex: 1;
            height: 100%;
        }
    }
</style>
