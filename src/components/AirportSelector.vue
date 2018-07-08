<template>
    <select 
        v-if="airports"
        aria-placeholder="Select an airport"
        @input="event => { $emit('input', event.target.value) }">
        <option v-for="airport in airports" :key="airport.iata" v-bind:value="airport.iata">
            {{ airport.shortName }}
        </option>
    </select>
</template>
<script>
export default {
    computed: {
        airports() {
            return this.$store.state.stations;
        }
    }
}
</script>
<style lang="sass" scoped>

</style>
