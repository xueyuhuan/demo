<template>
    <div class="gauge">
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
                let myChart = this.$echarts.init(document.getElementById('pie'))
                // 绘制图表
                myChart.setOption({
                    color:['#ffd800','#00d2ff','#ff6c00','#b39ddb'],
                    legend: {
                        right:'20%',
                        top: 'middle',
                        orient: 'vertical',
                        itemGap:30,
                        itemWidth:12,
                        itemHeight:12,
                        textStyle:{color:'#eee'},
                        data:this.pie
                    },
                    series : [
                        {
                            name: '饼图',
                            type: 'pie',
                            radius: '70%',
                            center:['30%','50%'],
                            data:this.pie,
                            //设置指向线
                            labelLine:{
                                normal:{
                                    show:false
                                }
                            },
                            //设置标签
                            label:{
                                normal:{
                                    position:'inner',//标签位置
                                    // formatter: '{a} {b} : {c}个 ({d}%)'   设置标签显示内容 ，默认显示{b}
                                    // {a}指series.name  {b}指series.data的name
                                    // {c}指series.data的value  {d}%指这一部分占总数的百分比
                                    formatter:'{d}%'
                                }
                            }
                        }
                    ],
                });
            }
        }
    }
</script>

<style lang="scss">
    .gauge{
        width: 200px;
        height: 200px;
        #gauge{
            width: 100%;
            height: 100%;
        }
    }

</style>
