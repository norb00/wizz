<template>
    <div class="containter-fluid">
        <form @submit.prevent="validateBeforeSubmit" name="searchFlight" id="searchFlight">
            <div class="row is-12 border border-primary">
                <div class="col-6 border border-primary">
                    <label class="label">Departure</label>
                    <p class="control has-icon has-icon-right">
                        <input name="departure" v-model="departure" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('departure') }" type="text" placeholder="departure">
                        <i v-show="errors.has('departure')" class="fa fa-warning"></i>
                        <span v-show="errors.has('departure')" class="help is-danger">{{ errors.first('departure') }}</span>
                    </p>
                    <airport-selector v-model="departure"></airport-selector>
                </div>
                <div class="col-6 border border-primary">
                    <label class="label">Destination</label>
                    <p class="control has-icon has-icon-right">
                        <input name="destination" v-model="destination" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('destination') }" type="text" placeholder="destination">
                        <i v-show="errors.has('destination')" class="fa fa-warning"></i>
                        <span v-show="errors.has('destination')" class="help is-danger">{{ errors.first('destination') }}</span>
                    </p>
                    <airport-selector v-model="destination"></airport-selector>
                </div>
            </div>

            <div class="row is-12 border border-primary">
                <div class="col-6 border border-primary">
                    <label class="label">Date of departure</label>
                    <p class="control has-icon has-icon-right">
                        <input name="travelDate" v-model="travelDate" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('travelDate') }" type="text" placeholder="travelDate">
                        <i v-show="errors.has('travelDate')" class="fa fa-warning"></i>
                        <span v-show="errors.has('travelDate')" class="help is-danger">{{ errors.first('travelDate') }}</span>
                    </p>
                </div>
                <div class="col-6 border border-primary">
                    <label class="label">Date of return</label>
                    <p class="control has-icon has-icon-right">
                        <input name="returndate" v-model="returnDate" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('returndate') }" type="text" placeholder="returndate">
                        <i v-show="errors.has('returndate')" class="fa fa-warning"></i>
                        <span v-show="errors.has('returndate')" class="help is-danger">{{ errors.first('returndate') }}</span>
                    </p>
                </div>
            </div>

            <div class="row is-12">
                <div class="col-12">
                    <p class="control">
                        <button class="button is-primary" type="submit">Submit</button>
                    </p>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import AirportSelector from './AirportSelector.vue';

    export default {
        methods: {
            validateBeforeSubmit() {
            // this.$validator.validateAll().then((result) => {
            //     if (result) {
            //         // eslint-disable-next-line
            //         alert('Form Submitted!');
            //         return;
            //     }

            //     alert('Correct them errors!');
            // });
                console.log(this.departure, this.destination, this.travelDateFormatted, this.returnDateFormatted);
                this.fetchFlights({
                    departure: this.departure, 
                    destination: this.destination, 
                    travelDate: this.travelDateFormatted
                });
//                this.submit();
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
            airports() {
                return this.$store.state.stations;
            },
            departure: {
                get() {
                    return this.$store.state.departure;
                },
                set(value) {
                    this.$store.commit('setDeparture', value);
                }
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
//                    const formattedValue = this.formatDate(value);
                    this.$store.commit('setTravelDate', value);
                }
            },
            returnDate: {
                get() {
                    return this.$store.state.returnDate;
                },
                set(value) {
//                    const formattedValue = this.formatDate(value);
                    this.$store.commit('setReturnDate', value);
                }
            },

            travelDateFormatted() {
                const td = new Date(this.travelDate);
                const year = td.getFullYear();
                const month = td.getMonth()+1 < 10 ? `0${td.getMonth()+1}` : td.getMonth()+1;
                const day = td.getDate() < 10 ? `0${td.getDate()}` : td.getDate();
                return `${year}-${month}-${day}`;
            },
            returnDateFormatted() {
                const td = new Date(this.returnDate);
                const year = td.getFullYear();
                const month = td.getMonth()+1 < 10 ? `0${td.getMonth()+1}` : td.getMonth()+1;
                const day = td.getDate() < 10 ? `0${td.getDate()}` : td.getDate();
                return `${year}-${month}-${day}`;
            }
        },
        components: {
            AirportSelector
        },
        created() {
            this.fetchStations();
        }
    };
</script>

<style lang="scss" scoped>
    @import '../../node_modules/bootstrap/scss/bootstrap.scss';
</style>
