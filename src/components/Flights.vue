<template>
    <div class="container" v-if="flights">
        <h2>Flights</h2>
        <div class="row col-10 border border-primary" v-for="flight in flights" :key="flight.flightnumber">
            <p><span>Departure: </span>{{ flight.departure | formatDate }}</p>
            <p><span>Arrive: </span>{{ flight.arrival | formatDate }}</p>
            <p><span>Remaining tickets: </span>{{ flight.remainingTickets }}</p>

            <tickets v-bind:flight="flight"></tickets>
        </div>

        <h2>Return Flights:</h2>
        <div class="row col-10 border border-primary" v-for="flight in returnFlights" :key="flight.flightnumber">
            <p><span>Departure: </span>{{ flight.departure | formatDate }}</p>
            <p><span>Arrive: </span>{{ flight.arrival | formatDate }}</p>
            <p><span>Remaining tickets: </span>{{ flight.remainingTickets }}</p>

            <tickets v-bind:flight="flight"></tickets>
        </div>

    </div>
</template>
<script>
    import Tickets from './Tickets';

    export default {
        computed: {
            flights() {
                return this.$store.state.flights;
            },
            returnFlights() {
                return this.$store.state.returnFlights;
            }
        },
        filters: {
            formatDate(value) {
                const td = new Date(value);
                const year = td.getFullYear();
                const month = td.getMonth()+1 < 10 ? `0${td.getMonth()+1}` : td.getMonth()+1;
                const day = td.getDate() < 10 ? `0${td.getDate()}` : td.getDate();
                const hours = td.getHours() < 10 ? `0${td.getHours()}` : td.getHours();
                const minutes = td.getMinutes() < 10 ? `0${td.getMinutes()}` : td.getMinutes();
                return `${year}-${month}-${day} ${hours}:${minutes}`; 
            }
        },
        components: {
            Tickets
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../node_modules/bootstrap/scss/bootstrap.scss';

</style>
