<template>
    <div class="containter-fluid">
        <form @submit.prevent="validateBeforeSubmit">
            <div class="row is-12">
                <div class="col-12">
                    <label class="label">Departure</label>
                    <p class="control has-icon has-icon-right">
                        <input name="departure" v-model="departure" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('departure') }" type="text" placeholder="departure">
                        <i v-show="errors.has('departure')" class="fa fa-warning"></i>
                        <span v-show="errors.has('departure')" class="help is-danger">{{ errors.first('departure') }}</span>
                    </p>
                </div>
            </div>

            <div class="row is-12">
                <div class="col-12">
                    <label class="label">Destination</label>
                    <p class="control has-icon has-icon-right">
                        <input name="destination" v-model="destination" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('destination') }" type="text" placeholder="destination">
                        <i v-show="errors.has('destination')" class="fa fa-warning"></i>
                        <span v-show="errors.has('destination')" class="help is-danger">{{ errors.first('destination') }}</span>
                    </p>
                </div>
            </div>

            <div class="row is-12">
                <div class="col-12">
                    <label class="label">Date of travel</label>
                    <p class="control has-icon has-icon-right">
                        <input name="traveldate" v-model="traveldate" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('traveldate') }" type="text" placeholder="traveldate">
                        <i v-show="errors.has('traveldate')" class="fa fa-warning"></i>
                        <span v-show="errors.has('traveldate')" class="help is-danger">{{ errors.first('traveldate') }}</span>
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
export default {
    data: () => ({
        departure: '',
        destination: '',
        traveldate: ''
    }),
    methods: {
        validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
            if (result) {
                // eslint-disable-next-line
                alert('Form Submitted!');
                return;
            }

            alert('Correct them errors!');
        });
        }
    }
};
</script>

<style lang="scss" scoped>
    @import '../../node_modules/bootstrap/scss/bootstrap.scss';
</style>
