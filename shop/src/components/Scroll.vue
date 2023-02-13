<template>
    <div id="container" class="box2">


        <!--
       on-loadmore: 滚动到底时触发
    -->
        <vue-loadmore style="border-style: dashed;" :on-loadmore="onLoad" :finished="finished">
            <div v-for="(item, index) of list" :key="index" class="products">

                <div class="product" v-if="index % 2 == 0">
                    <div>
                        <div class="productImg">
                            <img :src="require('../' + item.img + '.jpeg')" />
                        </div>
                        <div class="productLove"><img src="../assets/love.png" /></div>
                    </div>

                    <div>
                        <div class="productText">{{ item.text }}</div>
                        <div class="productCar"><img src="../assets/car.png" /></div>
                    </div>
                    <div style="clear:both;"></div>
                </div>


                <div class="product" v-if="index % 2 == 1">
                    <div>
                        <div class="productImg">
                            <img :src="require('../' + item.img + '.jpeg')" />
                        </div>
                        <div class="productLove"><img  src="../assets/love.png" /></div>
                    </div>

                    <div>
                        <div class="productText">{{ item.text }}</div>
                        <div class="productCar"><img src="../assets/car.png" /></div>
                    </div>
                    
                </div>
                
            </div>
            <div style="clear:both;"></div>
        </vue-loadmore>

        <div style="border-style:dashed; ">
            footer
        </div>


    </div>
</template>

<script>
export default {
    name: "ScrollUnit",
    data() {
        return {
            list: [],
            page: 1,
            pageSize: 4,
            finished: false,
            fullHeight: ''
        };
    },
    mounted() {
        this.fetch();
        this.fullHeight = document.documentElement.clientHeight
    },
    // 当页面调整并刷新后, 
    watch: {
        fullHeight(val) {
            // console.log("val height: " + val)
            const oIframe = document.getElementById('container')
            if (val - 260 - 50 > 0) {
                oIframe.style.height = (val - 260 - 50) + 'px'
            } else {
                oIframe.style.height = 100 + 'px'
            }
            // oIframe.style.height = (val - 150) + 'px';

            // console.log("now height: " + oIframe.style.height)
        }
    },
    methods: {
        // 触底时的刷新事件
        onLoad(done) {
            // console.log("onLoad()....")
            // TODO: 这里需要从后端拉取数据
            if (this.page <= 10) {
                this.fetch();
            } else {
                // all data loaded
                this.finished = true;
            }
            // 刷新完毕: 需要在处理完数据请求后执行回调函数 done()。
            done();
        },

        fetch() {
            // console.log("fetch()....")
            for (let i = 0; i < this.pageSize; i++) {
                // this.list.push(this.list.length + 1);

                this.list.push({
                    img: "assets/product1",
                    text: "Stainless Steel Collar For Dog",
                    price: "$41.22",
                },
                    {
                        img: "assets/product2",
                        text: "Stainless Steel Rose Gold-plating Ring",
                        price: "$90.23",
                    }
                );
            }
            // console.log("fetch(): this.list.length is:" + this.list.length)
            this.page++;
        }
    },
}
</script>


<style scoped>
.box2 {
    /* padding-bottom: 50px; */
    /* margin-bottom: 10px; */

    /* border-style: dashed; */
}

.products {
    /* border-style: dashed; */
    margin-bottom: 10px;
}

.product {
    margin-left: 5px;
    /* border-style: dashed; */
    width: 47%;
    float:left;

    /* display: flex; */
    /* margin-bottom: 10px; */
}

.productImg img {
    width: 85%;
    float: left;
}

.productLove {
    /* border-style: dashed; */
    /* width: 30px;
    height: 30px; */
    
}

.productLove img {
    width: 20px;
    float: left;
    /* margin-right: 10px; */
}

.productText {
    font-size: small;
    float: left;
    width: 80%;
    /* border-style: dashed; */
}

.productCar img {
    width: 20px;
    float: left;
}
</style>