<template>
    <div >

   这里是mobile


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


</style>