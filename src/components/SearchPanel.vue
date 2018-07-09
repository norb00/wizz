<template>
    <div class="containter" :class="{'processing' : isProcessing}">
        <form name="searchFlight" id="searchFlight">
            <div class="row is-12 border border-primary">
                <div class="col-6 border border-primary">
                    <label class="label">Departure</label>
                    <airport-selector v-model="departure" :selected-airport="departure" :class="{'border border-danger': fieldErrors('departure').length > 0 }"></airport-selector>
                    <error-list :errors-to-show="fieldErrors('departure')"></error-list>
                </div>
                <div class="col-6 border border-primary">
                    <label class="label">Destination</label>
                    <airport-selector v-model="destination" :selected-airport="destination" :filtered="filteredDestination"></airport-selector>
                    <error-list :errors-to-show="fieldErrors('destination')"></error-list>
                </div>
            </div>

            <div class="row is-12 border border-primary">
                <div class="col-6 border border-primary">
                    <label class="label">Date of departure</label>
                    <datepicker :format="dateFormat" v-model="travelDate" :clear-button="true" :disabledDates="disabledDates"></datepicker>
                    <error-list :errors-to-show="fieldErrors('travelDate')"></error-list>
                </div>
                <div class="col-6 border border-primary">
                    <label class="label">Date of return</label>
                    <datepicker :format="dateFormat" v-model="returnDate" :clear-button="true" :disabledDates="disabledDates"></datepicker>
                    <error-list :errors-to-show="fieldErrors('returnDate')"></error-list>
                </div>
            </div>
            <div class="row is-12">
                <div class="col-12">
                    <p class="control">
                        <button type="button" class="btn btn-primary" @click="validateForm">Search</button>
                    </p>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import AirportSelector from './AirportSelector.vue';
    import ErrorList from './ErrorList';
    import Datepicker from 'vuejs-datepicker';

    export default {
        data() {
            return {
                formErrors: [],
                dateFormat: "yyyy-MM-dd",
                disabledDates: {
                    to: new Date()
                }
            }
        },
        methods: {
            validateForm() {
                this.formErrors = [];

                if (!this.departure) {
                    this.formErrors.push({departure: 'Please select an airport'});
                }

                if (!this.destination) {
                    this.formErrors.push({destination: 'Please select an airport'});
                }

                if (this.departure === this.destination) {
                    this.formErrors.push({destination: 'Destination airport must be different than departure'});
                }

                if (!this.travelDate) {
                    this.formErrors.push({travelDate: 'Please select a travel date'});
                }

                if (this.travelDate && new Date(this.travelDate) < new Date()) {
                    this.formErrors.push({travelDate: 'Selected travel date is in the past'});
                }
                if (this.travelDate && this.returnDate && new Date(this.travelDate) > new Date(this.returnDate)) {
                    this.formErrors.push({travelDate: 'Date of return must be later than travel date'});
                }

                if (this.formErrors.length === 0) {
                    this.fetchFlights();
                }
            },
            fieldErrors(fieldname) {
                return this.formErrors.filter(e => e[fieldname]);
            },
            ...mapActions([
                'fetchStations',
                'fetchFlights'
            ]),
            formatDate(value) {
                const td = new Date(value);
                const year = td.getFullYear();
                const month = td.getMonth()+1 < 10 ? `0${td.getMonth()+1}` : td.getMonth()+1;
                const day = td.getDate() < 10 ? `0${td.getDate()}` : td.getDate();
                return `${year}-${month}-${day}`; 
            }
        },
        computed: {
            isProcessing() {
                return this.$store.state.isProcessing;
            },
            departure: {
                get() {
                    return this.$store.state.departure;
                },
                set(value) {
                    this.$store.commit('setDeparture', value);
                    this.$store.commit('filterDestinations', value);
                }
            },
            filteredDestination() {
                return Boolean(this.departure != '');
            },
            destination: {
                get() {
                    return this.$store.state.destination;
                },
                set(value) {
                    this.$store.commit('setDestination', value);
                }
            },
            travelDate: {
                get() {
                    return this.$store.state.travelDate;
                },
                set(value) {
                    this.$store.commit('setTravelDate', value);
                }
            },
            returnDate: {
                get() {
                    return this.$store.state.returnDate;
                },
                set(value) {
                    this.$store.commit('setReturnDate', value);
                }
            }
        },
        components: {
            AirportSelector,
            ErrorList,
            Datepicker
        },
        created() {
            this.fetchStations();
        }
    };
</script>

<style lang="scss" scoped>
    @import '../../node_modules/bootstrap/scss/bootstrap.scss';
    .processing {
        color: #8e8e8e;
    }

    .clear {
        float: left;
    }
</style>
