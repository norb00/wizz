<template>
    <div class="container  border border-warning">
        <h3>Tickets</h3>
        {{ flightDetails.departure }} - {{ flightDetails.destination }}
        <div class="row" v-for="ticket in tickets" :key="ticket.ticket.fareSellKey">
            {{ ticket.ticket.departure }}
            {{ ticket.ticket.arrive }}
            {{ ticket.ticket.bundle }}
            {{ ticket.ticket.price }}
            <button type="button" class="btn btn-danger" @click="removeFromCart(ticket)">Remove</button>
        </div>
        <h3>Total price: {{ totalPrice }}</h3>
    </div>
</template>
<script>
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
            }
        }
    }
</script>
<style lang="scss">
    @import '../../node_modules/bootstrap/scss/bootstrap.scss';
</style>
