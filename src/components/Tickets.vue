<template>
    <div class="">
        <div class="d-flex flex-row justify-content-around" v-if="flight.remainingTickets !== 0">
            <div class="" v-for="fare in flight.fares" :key="fare.fareSellKey">
                <button type="button" class="btn btn-primary"  @click="selectTicket(flight,fare)">{{ fare.bundle }}<br/>{{ fare.price }}</button>
            </div>
        </div>
        <div class="row" v-if="flight.remainingTickets === 0">
            <span class="border border-warning">Tickets not available for this flight</span>
        </div>
    </div>
</template>
<script>
    import ErrorList from './ErrorList';
    export default {
        props: {
            flight: [Object, String]
        },
        data() {
            return {
                fieldErrors: []
            }
        },
        methods: {
            selectTicket(flight, ticket) {
                this.fieldErrors = [];
                const _trip = {
                    ticket: ticket,
                    arrive: flight.arrival,
                    departure: flight.departure,
                    flightNumber: flight.flightNumber,
                    flight: flight
                };
                const isInTheList = this.tickets.find(ticket => {
                    return ticket.flightNumber === flight.flightNumber;
                });

                if (isInTheList) {
                    this.fieldErrors.push({ticket: 'A ticket for this flight is already in the cart'});
                } else {
                    const onThisDaySelected = this.tickets.find(_ticket => {
                        return _ticket.departure === _trip.departure;
                    });
                    console.log(flight, onThisDaySelected);
                    if (onThisDaySelected) {
                        this.fieldErrors.push({ticket: 'You can select only one ticket per day'});
                    } else {
                        this.$store.commit('addTicketToCart', _trip);
                        flight.remainingTickets--;
                    }
                }
            }
        },
        computed: {
            tickets() {
                return this.$store.state.tickets;
            }
        },
        components: {
            ErrorList
        }
    }
</script>
<style lang="scss">
    @import '../../node_modules/bootstrap/scss/bootstrap.scss';
</style>

