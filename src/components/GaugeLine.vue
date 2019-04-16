<template>
    <div class="gaugeLine">
        <div class="other">
            <span class="name">DC负载温度（度）</span>
            <span class="value">68</span>
            <span class="circle"><i></i></span>
        </div>
        <div id="gaugeLine">

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
                let myChart = this.$echarts.init(document.getElementById('gaugeLine'))
                // 绘制图表
                myChart.setOption({
                    series:[
                        {
                            type:'gauge',
                            center:['60%','70%'],
                            startAngle:180,
                            endAngle:90,
                            min:50,
                            max:140,
                            axisLine:{
                                lineStyle:{
                                    width:0,
                                    opacity:1
                                }
                            },//仪表盘主体一圈
                            splitNumber:2,//长分割线数
                            splitLine:{
                                length:24,
                                lineStyle:{
                                    color: '#fff'
                                }
                            },//长分割线数样式
                            axisTick:{
                                length:15,
                                splitNumber:5,
                                // lineStyle:{
                                //     color:'auto'
                                // }
                            },//短刻度线
                            axisLabel:{
                                distance:-50,
                                fontWeight:600,
                                color:'#fff'
                            },//标签样式
                            pointer:{
                                length:'70%',
                                width:3
                            },//指针大小
                            itemStyle:{
                                color:'#29b0f1',
                            },//指针样式
                            title:{
                                show:false
                            },
                            detail:{
                                show:false
                            },
                            data: [
                                {value: 68, name: 'DC/AC输出电压（V）'}
                            ]
                        }
                    ]
                });
            }
        }
    }
</script>

<style lang="scss">
    .gaugeLine{
        position: relative;
        width: 200px;
        height: 270px;
        background: #161a3c;
        .other{
            position: absolute;
            width: 100%;
            height: 100%;
            .name{
                position: absolute;
                top: 28px;
                left: 34px;
                font-size: 14px;
                color: #8c91bf;
            }
            .value{
                position: absolute;
                top: 60px;
                left: 34px;
                font-size: 22px;
                color: #f9813a;
            }
            .circle{
                position: absolute;
                left: 60%;
                top:69%;
                z-index: 999;
                background: #fff;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                i{
                    position: absolute;
                    top:50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    background: #29b0f1;
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                }
            }
        }
        #gaugeLine{
            width: 100%;
            height: 100%;
        }
    }

</style>
