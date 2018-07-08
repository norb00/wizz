<template>
    <div class="container-fluid">
        <div class="row" v-if="flight.remainingTickets !== 0">
            <div class="col-2" v-for="fare in flight.fares" :key="fare.fareSellKey" @click="selectTicket(flight,fare)">{{ fare.bundle }}: {{ fare.price }}</div>
        </div>
        <div class="row" v-if="flight.remainingTickets === 0">
            <span class="border border-warning">Tickets not available for this flight</span>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            flight: [Object, String]
        },
        methods: {
            selectTicket(flight, ticket) {
                const _trip = {
                    ticket: ticket,
                    arrive: flight.arrival,
                    departure: flight.departure
                };
                this.$store.commit('addTicketToCart', _trip);
            }
        }
    }
</script>
