<template>
    <div class="gauge">
        <div class="line"></div>
        <div id="gauge">

        </div>
    </div>
</template>

<script>
    export default {
        name: "Gauge",
        mounted(){
            this.drawLine();
        },
        methods:{
            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('gauge'))
                // 绘制图表
                myChart.setOption({
                    series : [
                        {
                            type: "gauge",
                            center:['50%','80%'],
                            radius: "70", //仪表大小
                            startAngle:180,
                            endAngle:0,
                            axisLine:{
                                show:false,
                                lineStyle:{
                                    width:10,
                                    color:[
                                        [ 0.5,  new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                            offset: 1,
                                            color: "#E75F25" // 50% 处的颜色
                                        }, {
                                            offset: 0.8,
                                            color: "#D9452C" // 40% 处的颜色
                                        }], false) ],
                                        [ 0.7,  new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                            offset: 1,
                                            color: "#FFC539" // 70% 处的颜色
                                        }, {
                                            offset: 0.8,
                                            color: "#FE951E" // 66% 处的颜色
                                        }, {
                                            offset: 0,
                                            color: "#E75F25" // 50% 处的颜色
                                        }], false) ],
                                        [ 0.9,  new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 1,
                                            color: "#C7DD6B" // 90% 处的颜色
                                        }, {
                                            offset: 0.8,
                                            color: "#FEEC49" // 86% 处的颜色
                                        }, {
                                            offset: 0,
                                            color: "#FFC539" // 70% 处的颜色
                                        }], false) ],
                                        [1,  new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [ {
                                            offset: 0.2,
                                            color: "#1CAD52" // 92% 处的颜色
                                        }, {
                                            offset: 0,
                                            color: "#C7DD6B" // 90% 处的颜色
                                        }], false) ]
                                    ],
                                }
                            },
                            splitLine:{
                                show:false
                            },
                            axisTick:{
                                show:false
                            },//刻度
                            axisLabel:{
                                show:false
                            },//刻度标签
                            pointer:{
                                length:'110%',
                                width:5
                            },//指针大小
                            itemStyle:{
                                color:'#2c3638',
                                borderWidth:1,
                                borderColor:'#eee',
                            },//指针样式
                            detail:{
                                offsetCenter:['-50px','-100px'],
                                color:'#979ccc',
                                fontSize:24
                            },
                            title:{
                                offsetCenter:['0','-130px'],
                                color:'#979ccc',
                                fontSize:14
                            },
                            data: [
                                {value: 850, name: 'DC/AC输出电压（V）'}
                            ]
                        },
                    ],
                });
            }
        }
    }
</script>

<style lang="scss">
    .gauge{
        position: relative;
        width: 200px;
        height: 200px;
        background: #161a3c;
        .line{
            position: absolute;
            top:80%;
            left:50%;
            margin-left: -70px;
            width: 140px;
            border-top: 1px #454a6e dashed;
        }
        #gauge{
            width: 100%;
            height: 100%;
        }
    }

</style>
