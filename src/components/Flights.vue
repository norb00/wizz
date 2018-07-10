<template>
    <div class="d-flex w-100" v-if="flights">
        <div v-if="flights.length>0" class="d-flex flex-column w-50 p-3">
            <h2>Flights</h2>
            <h3>{{ airportName(departure) }} - {{ airportName(destination) }}</h3>
            <div class="flights border border-primary w-100 p-1 m-1" v-for="flight in flights" :key="flight.flightnumber">
                <p><span>Departure: </span>{{ flight.departure | formatFullDate }}</p>
                <p><span>Arrive: </span>{{ flight.arrival | formatFullDate }}</p>
                <p><span>Remaining tickets: </span>{{ flight.remainingTickets }}</p>

                <tickets v-bind:flight="flight"></tickets>
            </div>
        </div>

        <div class="return-flights d-flex flex-column w-50 p-3">
            <h2>Return Flights:</h2>
            <h3>{{ airportName(destination) }} - {{ airportName(departure) }}</h3>
            <div class="flights border border-primary w-100 p-1 m-1" v-if="returnFlights" v-for="flight in returnFlights" :key="flight.flightnumber">
                <p><span>Departure: </span>{{ flight.departure | formatFullDate }}</p>
                <p><span>Arrive: </span>{{ flight.arrival | formatFullDate }}</p>
                <p><span>Remaining tickets: </span>{{ flight.remainingTickets }}</p>

                <tickets v-bind:flight="flight"></tickets>
            </div>
            <div v-if="!returnDate">
                <label for="returnDate">Select a return date</label>
                <datepicker name="returnDate" :format="dateFormat" v-model="returnDate" :clear-button="true" :disabledDates="disabledDates"></datepicker>
            </div>
        </div>
        <div v-if="flights.length === 0" class="c-error">
            There are not available flights!
        </div>
    </div>
</template>
<script>
    import Tickets from './Tickets';
    import Datepicker from 'vuejs-datepicker';
    import { mapActions } from 'vuex';
    import { formatDate, formatFullDate } from '../utils/date-functions';

    export default {
        data() {
            return {
                dateFormat: "yyyy-MM-dd",
                disabledDates: {
                    to: new Date()
                }
            }
        },
        methods: {
            ...mapActions([
                'fetchFlights'
            ]),
            airportName(iata) {
                const airport = this.airports.find(a => a.iata == iata);
                return airport.shortName;
            }
        },
        computed: {
            flights() {
                return this.$store.state.flights;
            },
            returnFlights() {
                return this.$store.state.returnFlights;
            },
            returnDate: {
                get() {
                    return this.$store.state.returnDate;
                },
                set(value) {
                    this.$store.commit('setReturnDate', value);
                }
            },
            departure() {
                return this.$store.state.departure;
            },
            destination() {
                return this.$store.state.destination;
            },
            airports() {
                return this.$store.state.stations;
            }
        },
        filters: {
            formatDate,
            formatFullDate
        },
        watch: {
            returnDate: function() {
                this.fetchFlights();
            }
        },
        components: {
            Tickets,
            Datepicker
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../node_modules/bootstrap/scss/bootstrap.scss';

</style>
