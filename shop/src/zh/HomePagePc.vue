  
<template>
    <div class="bon">

<div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div>
<div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div>
<div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div>

<el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
            点我打开
        </el-button>

<div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div>
<div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div>
        <button @click="drawer = true" type="primary" style="margin-left: 16px;"></button>




        <el-drawer class="drawer" title="我是标题" :visible.sync="drawer" :with-header="true" :modal="false" size="200px" :wrapperClosable=true>
            <span>我来啦!666</span>
            <span>我来啦!</span>
            <span>我来啦!</span>
            <span>我来啦!</span>
            <span>我来啦!</span>
            <div>

                <router-link class="mui-tab-item1" to='/zh/mobile/home'>
                    <span class="mui-icon mui-icon-home"></span>
                    <span class="mui-tab-label">首页</span>
                </router-link>
            </div>
        </el-drawer>

    </div>


</template>
<script>
export default {
    data() {
        return {
            drawer: false,
        };
    }

};
</script>

<style scoped>
.bon {
    border-style: dashed;
    margin-top: 200px;
}

.drawer {
    width: 400px;
}

</style>