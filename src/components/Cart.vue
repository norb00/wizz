<template>
    <div class="cart border border-secondary w-100 p-2 bg-light">
        <h1>Tickets</h1>
        
        <div class="border-bottom border-warning text-center py-2" v-for="ticket in tickets" :key="ticket.ticket.fareSellKey">
            <div class="font-weight-bold">{{ airportName(ticket.route.departure) }} - {{ airportName(ticket.route.destination) }}</div>
            <div class="py-1 text-info">{{ formatFullDate(ticket.flight.departure) }} - {{ formatFullDate(formatFullDate(ticket.flight.arrival))}}</div>
            <span class="mx-3">{{ ticket.ticket.bundle }}</span>
            <span class="mx-3">{{ ticket.ticket.price }}</span>
            <button type="button" class="btn btn-danger mx-3 my-2" @click="removeFromCart(ticket)">Remove</button>
        </div>
        <h2 class="py-3 text-danger">Total price: {{ totalPrice }}</h2>
    </div>
</template>
<script>
    import { formatFullDate } from '../utils/date-functions';

    export default {
        computed: {
            tickets() {
                return this.$store.state.tickets;
            },
            flightDetails() {
                return {
                    departure: this.$store.state.departure,
                    destination: this.$store.state.destination
                }
            },
            totalPrice() {
                let sumPrice = 0;
                this.tickets.forEach(ticket => {
                    sumPrice += ticket.ticket.price;
                });
                return sumPrice;
            }
        },
        methods: {
            removeFromCart(ticket) {
                this.$store.commit('removeTicket', ticket);
            },
            airportName(iata) {
                const airport = this.$store.state.stations.find(a => a.iata == iata);
                return airport.shortName;
            },
            formatFullDate
        }
    }
</script>
<style lang="scss">
    @import '../../node_modules/bootstrap/scss/bootstrap.scss';
    .cart {
        font-size: 12px;
        h1 {
            font-size: 1.2rem;
        }
        h2 {
            font-size: 1.1rem;
        }
        .btn {
            width: auto;
            min-width: 4rem;
            font-size: 12px;
        }
    }
</style>
