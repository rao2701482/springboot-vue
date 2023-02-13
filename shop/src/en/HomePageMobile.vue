<template>
    <div class="xxxx">
        <el-radio-group v-model="direction">
            <el-radio label="ltr">从左往右开</el-radio>
            <el-radio label="rtl">从右往左开</el-radio>
            <el-radio label="ttb">从上往下开</el-radio>
            <el-radio label="btt">从下往上开</el-radio>
        </el-radio-group>

        <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
            点我打开
        </el-button>

        <el-drawer title="我是标题1111" :visible.sync="drawer"  >
            <span>我来啦!</span>
        </el-drawer>



    </div>
</template>

<script>

export default {

    name: "HomePageEnMobile",
    data() {
        return {
            drawer: false,
            direction: 'rtl',
        };
    },
    methods: {
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(() => {
                    done();
                })
                .catch(() => { });
        }
    }
}

</script>

<style scoped>


.xxxx{
    margin-top: 200px;;
}
</style>