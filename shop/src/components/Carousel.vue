<template>
    <div class="box">

        <!-- 通过ref来控制swiper组件dom -->
        <!-- 动态绑定options配置项 -->
        <!-- 如果是通过接口获得的数据，部分配置可能不生效，通过 v-if 先获得数据在生成dom -->
        <swiper ref="mySwiper" :options="swiperOptions" v-if="imgList.length">
            <swiper-slide v-for="(r, i) in imgList" :key="i">
                <img :src="r" :title="r.title" width="100%" height="100%">
            </swiper-slide>
            <!-- 轮播图分页器 -->
            <div class="swiper-pagination" slot="pagination"></div>
            <!-- 轮播图导航按钮 -->
            <div id="button-prev-next" class="swiper-button-prev" slot="button-prev"></div>
            <div id="button-prev-next" class="swiper-button-next" slot="button-next"></div>
        </swiper>

    </div>
</template>

<script>
// import axios from 'axios'
export default {
    name: 'CarouselUnit',
    data() {
        return {
            imgList: [
                'https://public-ryan.oss-cn-hangzhou.aliyuncs.com/banner_1.jpg',
                'https://public-ryan.oss-cn-hangzhou.aliyuncs.com/banner_2.jpg',
                'https://public-ryan.oss-cn-hangzhou.aliyuncs.com/banner_3.jpg'
            ],
            swiperOptions: {
                // 分页器配置项
                pagination: {
                    // 分页器选择器: 轮播图下面的小点
                    el: '.swiper-pagination',
                    // 可点击切换
                    clickable: true
                },
                // 自动播放
                // autoplay:true // 等同于以下配置
                autoplay: {
                    // 自动切换的时间间隔
                    delay: 2000,
                    // 如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）。
                    stopOnLastSlide: false,
                    // 如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
                    disableOnInteraction: false
                },
                // 循环模式
                loop: true,
                // 切换效果，当前为3d流
                effect: 'coverflow',
                // 前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                // observeParents: true,
                // observer: true,
            }
        }
    },

    // created() {
    //     axios({
    //         url: 'https://api.apiopen.top/getWangYiNews',
    //         method: 'POST',
    //         data: {
    //             page: 1,
    //             count: 20
    //         }
    //     })
    //         .then(res => {
    //             console.log(res);
    //             this.imgList = res.data.result.slice(10, 15);
    //             // 在这里使用$nextTick方法 是因为组件是后来有数据的时候加载上去的，
    //             // 更新了dom的值，这时候想获取dom就必须借助于$nextTick方法
    //             this.$nextTick(() => {
    //                 this.$refs.mySwiper.swiper.slideTo(1, 1500, false)
    //             })
    //         })
    // }
}
</script>

<style scoped>
.box {
    z-index: 4;
    /* border-style: dashed; */
    /* padding-bottom: -20px; */
    margin-bottom: -6px;

    /* 当前轮播图下沿有点空间没有利用上, 所以允许下方元素上压一点 */
}

.swiper-container {
    /* border-style: dashed; */
    padding-top: 50px;

    /* 让当前页面在header的下方显示 */
    /* width: 600px; */
    /* height: 400px; */
    /* margin: 20px auto; */
}

#button-prev-next {
    /* border-style: dashed; */
    /* 控制轮播图左右滑图标下移 */
    margin-top: 10px;
}
</style>