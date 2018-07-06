<template>
    <select v-model="airport" name="airport" id="airport">
        <option v-for="airport in airports" :key="airport.iata">
            {{ airport.shortName }}
        </option>
    </select>
</template>
<script>
export default {
    computed: {
        airports: function () {
            return this.$store.state.stations;
        },
        airport: {
            get() {
                return this.$store.state.airport;
            },
            set(airport) {
                console.log(airport);
            }
        }
    },
    methods: {
        selectAirport() {
            console.log(this.airport);
        }
    }
}
</script>
<style lang="sass" scoped>

</style>
