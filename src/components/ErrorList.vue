<template>
    <div v-if="errorsToShow" class="container">
        <div v-for="(error, index) in errorsToShow" :key="`error-${index}`" class="row">
            <i v-show="error" class="fa fa-warning"></i>
            <span v-show="error" class="text text-danger">{{ Object.values(error) }}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        errorsToShow: Array
    }
}
</script>
