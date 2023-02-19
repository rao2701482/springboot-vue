<template>
    <!-- header是否展示, 由 -->
    <div v-show="showHeader">

        <!-- 头部header -->
        <div class="header">
            <div class="logo">
                <a href="/zh/mobile/home">
                    <img src="@/assets/Lori.svg" alt="外贸logo" />
                </a>
            </div>
            <div class="search">
                <input style="border-radius: 30px;" class="searchInput" type="text" placeholder="请输入产品名称"
                    @keyup.enter="submit" />
                <!-- <span class="mui-icon mui-icon-search" @click="submit"></span> -->

            </div>

            <van-icon class="van-icon searchIcon" size="30px" name="search" @click="submit" />

            <div class="nav">
                <img src="@/assets/wap-nav.svg" @click="drawer = true" alt="外贸logo" />
            </div>
        </div>

        <el-drawer class="drawer" title="我是标题" :visible.sync="drawer" :with-header="true" :modal="false" size="200px"
            :wrapperClosable=true>
            <span>将来放置一些跳转页面</span>

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
    name: 'HeaderUnit',

    data() {
        return {
            drawer: false,
        }
    },
    methods: {
        submit() {
            console.log(this.$store.state.count)
            this.$router.push("/login")
        }
    },
    computed: {
        showHeader: function () {
            let header = this.$store.getters.showHeader;
            return header
        }
    }
}
</script>

<style lang="less" scoped>
.header {
    // 控制header只有700像素并居中
    max-width: 700px;
    width: 100%;
    margin: 0 auto;

    position: fixed; // header固定展示在顶部


    // 子元素采用flexBox布局
    display: flex;

    background-color: transparent; // 背景色透明
    background-color: #fff; // header整体白底, 悬浮样式
    opacity: 0.8;
    /* 搜索框半透明效果 */
}

.logo {
    margin-left: 10px;
}

.header .logo img {
    // 保证logo图片大小显示正常
    width: 70px;
}

.search {
    margin-left: 5px;
    flex: 1; // 搜索框自动填充整个行的可用空间
    display: flex; // 在搜索框这个空间, 膨胀进行填充
}

.searchInput {
    text-indent:15px; // 输入框input光标距离输入框左边间距
    width: 100%;  // 搜索框自动填充整个行的可用空间
}


.searchIcon {
    margin: auto 5px;
}

.nav {
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 10px;

}

.nav img {
    // 保证logo图片大小显示正常
    width: 40px;
}
</style>