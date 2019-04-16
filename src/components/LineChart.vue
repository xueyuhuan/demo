<template>
    <div class="line">
        <div class="btn">
            <button v-for="(i,index) in btn" :key="index" :class="{active:n===index}" @click="toggle(index)">{{i}}</button>
        </div>
        <div id="line"></div>
    </div>
</template>

<script>
    export default {
        name: "LineChart",
        data () {
            return {
                btn:['年','月','日'],
                n:0,
                day:24,
                month:31,
                year:12,
                x:[],
                y:{
                    y1:[],
                    y2:[],
                    y3:[],
                },
            }
        },
        mounted(){
            this.x=this.arr(24);
            for(let i=0;i<31;i++){
                this.y.y1.push(Math.ceil(Math.random()*24));
                this.y.y2.push(Math.ceil(Math.random()*31));
                this.y.y3.push(Math.ceil(Math.random()*12));
            }
            console.log(this.y.y1);
            this.drawLine();
        },
        methods: {
            toggle(index){
                this.n=index;
                this.drawLine();
            },
            arr(length){
                return Array.from({length}).map((v,k)=>k+1);
            },
            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('line'))
                // 绘制图表
                myChart.setOption({
                    color:['#00d2ff','#ffd800','#0645cd'],
                    legend: {
                        top: 60,
                        itemGap:30,
                        itemWidth:12,
                        itemHeight:12,
                        textStyle:{color:'#eee'},
                        data:['光伏发电量','购入量','销售量']
                    },
                    grid:{
                        top:100,
                        right:60,
                        bottom:50,
                        left:60,
                    },
                    tooltip:{
                        backgroundColor:'rgba(0,0,0,0)',
                        formatter:'{c}',
                    },
                    xAxis : {
                        type : 'category',
                        boundaryGap:false,//坐标轴首尾留白
                        axisLine:{
                            lineStyle:{
                                type:'dashed',
                                color:'#6d7085',
                            }
                        },//坐标轴线
                        axisLabel:{
                            color:"#eee"
                        },//坐标轴文字
                        splitLine:{
                            show:true,
                            lineStyle:{
                                type:'dashed',
                                color:'#6d7085',
                            }
                        },//分割线
                        data : this.x,
                    },
                    yAxis : {
                        type : 'value',
                        axisLine:{
                            lineStyle:{
                                type:'dashed',
                                color:'#6d7085',
                            }
                        },//坐标轴线
                        axisLabel:{
                            color:"#eee"
                        },//坐标轴文字
                        splitLine:{
                            show:true,
                            lineStyle:{
                                type:'dashed',
                                color:'#6d7085',
                            }
                        },//分割线
                    },
                    series : [
                        {
                            name:'光伏发电量',
                            type: 'line',
                            smooth:0.3,
                            // areaStyle:{},
                            data:this.y.y1,
                        },
                        {
                            name:'购入量',
                            type: 'line',
                            smooth:0.3,
                            // areaStyle:{},
                            data:this.y.y2,
                        },
                        {
                            name:'销售量',
                            type: 'line',
                            smooth:0.3,
                            // areaStyle:{},
                            data:this.y.y3,
                        }
                    ],
                });
            }
        }
    }
</script>

<style lang="scss">
    .line{
        position: relative;
        width: 1150px;
        height: 360px;
        background: #161a3c;
        .btn{
            position: absolute;
            z-index: 999;
            top:30px;
            left: 110px;
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
        #line{
            width: 100%;
            height: 100%;
        }
    }
</style>
