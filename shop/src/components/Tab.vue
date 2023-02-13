<template>
    <div class="box">
        <!-- 选项卡链接 -->
        <div class="tab">
            <!-- defaultOpen: 默认选中 -->
            <div class="tabItem">
                <button class="tablinks" @click="openCity($event, 'London')" id="defaultOpen">London</button>
            </div>

            <div class="tabItem">
                <button class="tablinks" @click="openCity($event, 'Paris')">Paris</button>
            </div>

            <div class="tabItem">
                <button class="tablinks" @click="openCity($event, 'Tokyo')">Tokyo</button>
            </div>
        </div>

        <!-- 选项卡内容 -->
        <div id="London" class="tabcontent" style="display:block;">
            <h3>London</h3>
            <p>London is the capital city of England.</p>
        </div>

        <div id="Paris" class="tabcontent">
            <h3>Paris</h3>
            <p>Paris is the capital of France.</p>
        </div>

        <div id="Tokyo" class="tabcontent">
            <h3>Tokyo</h3>
            <p>Tokyo is the capital of Japan.</p>
        </div>

    </div>

</template>

<script>



export default {
    name: "HomePage",

    mounted() {
        // 获取id为=“defaultOpen”的元素并单击它
        document.getElementById("defaultOpen").click();
    },

    methods: {
        openCity: function (evt, cityName) {
            // 声明所有变量
            var i, tabcontent;
            var tablinks;

            // 使用class=“tabcontent”获取所有元素并隐藏它们
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            // 使用class=“tablinks”获取所有元素并删除类“active”
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace("active", "");
            }

            // 显示当前选项卡，并向打开该选项卡的按钮添加“活动”类
            document.getElementById(cityName).style.display = "block";
            // console.log(evt.currentTarget.className)
            evt.currentTarget.className += " active";
            // console.log(evt.currentTarget.className)
        }
    },
    created() {
        window.myData = this;
    }
}
</script>


<style scoped>
.box {
    /* border-style:dashed; */
    /* padding-top: 50px;; */
}

/* 设置选项卡的样式 */
.tab {

    overflow: hidden;
    border: 1px solid #ccc;
height: 200px;
    /* background-color: #f1f1f1; */
    background-color: transparent;
}

.tabItem {
    /* border-style: dashed; */
}

/* 设置用于打开选项卡内容的按钮的样式 */
.tab button {
    background-color: inherit;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
}

/* 更改悬停按钮的背景色 */
.tab button:hover {
    /* background-color: rgb(182, 82, 82); */
    background-color: #ddd;
}

/* 创建活动/当前tablink类 */
.tab button.active {
    /* background-color: rgb(182, 82, 82); */
    background-color: #ccc;
    /* background: url('../assets/logo.png'); */
}

/* 设置选项卡内容的样式 */
.tabcontent {
    display: none;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;
    /*如果要淡入标签内容，请添加以下 CSS*/
    animation: fadeEffect 2s;
    /* 褪色效果需要1秒 */
}

/* 从零变为完全不透明度 */
@keyframes fadeEffect {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>