<template>
    <div class="box1">

        <CarouselUnit></CarouselUnit>

        <TabUnit></TabUnit>

        <ScrollUnit></ScrollUnit>

    </div>


</template>


<script>
import CarouselUnit from '@/components/Carousel.vue'
import TabUnit from '@/components/ElTab.vue'
import ScrollUnit from '@/components/Scroll.vue'

export default {

    name: "HomePage",
    components: { CarouselUnit, TabUnit, ScrollUnit },
    data() {
        return {
        }
    }
}

</script>

<style scoped>
.box1 {

    /* background-color: bisque; */
    /* padding-top: 50px; */
    /* 让当前页面在header的下方显示 */
}

</style>