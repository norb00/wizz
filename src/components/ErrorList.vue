<template>
    <div v-if="errorsToShow" class="container">
        <div v-for="(error, index) in errorsToShow" :key="`error-${index}`" class="row align-middle">
            <i class="fa fa-warning text-danger pl-1 mt-1 mr-1 align-middle"></i>
            <span v-show="error" class="text text-danger">{{ Object.values(error)[0] }}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ErrorList',
    props: {
        errorsToShow: Array
    }
}
</script>
<style lang="scss">
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
</style>
