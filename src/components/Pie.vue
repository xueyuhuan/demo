<template>
    <div class="pie">
        <div class="btn">
            <button v-for="(i,index) in btn" :key="index" :class="{active:n===index}" @click="toggle(index)">{{i}}</button>
        </div>
        <div id="pie"></div>
    </div>
</template>

<script>
    export default {
        name: "Pie",
        data () {
            return {
                json:[
                    {
                        pie: [
                            {value:0,name:'光能'},
                            {value:120,name:'储能'},
                            {value:140,name:'充电桩'},
                            {value:160,name:'未知'},
                        ]
                    },
                    {
                        pie: [
                            {value:11,name:'光能'},
                            {value:34,name:'储能'},
                            {value:140,name:'充电桩'},
                            {value:160,name:'未知'},
                        ]
                    },
                    {
                        pie: [
                            {value:0,name:'光能'},
                            {value:0,name:'储能'},
                            {value:140,name:'充电桩'},
                            {value:160,name:'未知'},
                        ]
                    }
                ],
                btn:['年','月','日'],
                n:0,
                pie:[],
            }
        },
        mounted(){
            this.pie=this.json[0].pie;
            this.drawLine();
        },
        methods: {
            toggle(index){
              this.n=index;
              this.pie=this.json[index].pie;
              this.drawLine();
            },
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
    .pie{
        position: relative;
        width: 470px;
        height: 260px;
        background: #161a3c;
        .btn{
            position: absolute;
            z-index: 999;
            top:10px;
            right: 30px;
            button{
                width: 62px;
                height: 32px;
                background: #191d6b;
                font-size: 12px;
                color: #fff;
                border: none;
            }
            button.active{
                background: #3174fe;
            }
        }
        #pie{
            width: 100%;
            height: 100%;
        }
    }

</style>
