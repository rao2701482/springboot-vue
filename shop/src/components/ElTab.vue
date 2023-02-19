<template>
    <el-tabs class="box" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane class="box1" label="用户管理" name="first">
            用户管理
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
</template>
<script>


export default {
    data() {
        return {
            activeName: 'second',
            count: 0,
            idxx: 0
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
}

</script>

<style scoped>
.box {

    margin-left: 10px;
    margin-right: 10px;
}
</style>