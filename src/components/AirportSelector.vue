<template>
<div class="select">
    <select 
        v-if="airports"
        aria-placeholder="Select an airport"
        @input="event => { $emit('input', event.target.value) }">
        <option value="">
            Select an airport
        </option>
        <option v-for="airport in airports" 
            :key="airport.iata" 
            :value="airport.iata" 
            :selected="selectedAirport === airport.iata">
                {{ airport.shortName }}
        </option>
    </select>
</div>
</template>
<script>
export default {
    props: {
        selectedAirport: String, 
        filtered: {
            type: Boolean,
            required: false
        }
    },
    computed: {
        airports() {
            if (this.filtered && this.$store.state.filteredDestinations && this.$store.state.filteredDestinations.length > 0) {
                return this.$store.state.filteredDestinations;
            } else {
                return this.$store.state.stations;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.select {
    position:relative;
    display:block;
    margin:4px 0 8px;
    margin-bottom:20px;
    border-radius:3px;
    background:#f3f3f3 30%;
    background:-webkit-linear-gradient(to bottom,#f3f3f3 30%,#e1e1e1);
    background:-moz-linear-gradient(to bottom,#f3f3f3 30%,#e1e1e1);
    background:-ms-linear-gradient(to bottom,#f3f3f3 30%,#e1e1e1);
    background:-o-linear-gradient(to bottom,#f3f3f3 30%,#e1e1e1);
    background:linear-gradient(to bottom,#f3f3f3 30%,#e1e1e1);
    -webkit-box-shadow:inset 0 0 0 1px rgba(0,0,0,0.2),inset 0 1px 0 1px #fff,0 1px 2px rgba(0,0,0,0.15);
    -moz-box-shadow:inset 0 0 0 1px rgba(0,0,0,0.2),inset 0 1px 0 1px #fff,0 1px 2px rgba(0,0,0,0.15);box-shadow:inset 0 0 0 1px rgba(0,0,0,0.2),inset 0 1px 0 1px #fff,0 1px 2px rgba(0,0,0,0.15);

    &:before{
        content:"\f0dd";
        font-family: FontAwesome;
        font-weight: normal;
        font-style: normal;
        display: inline-block;
        -webkit-font-smoothing: antialiased;
        font-size:14px;
        color:#666;
        position:absolute;
        right:11px;
        top:8px;
        text-shadow:0 1px 0 #fff;
        pointer-events:none;
    }

    &:after {
        content:'';
        position:absolute;
        top:1px;
        bottom:1px;
        right:28px;
        border-left:1px solid rgba(0,0,0,0.1);
        border-right:1px solid #fff;
        pointer-events:none;
    }
    &:after,x:-moz-any-link {
        display:none
    }

    select {
        height:40px;
        margin-bottom:0;
        line-height:20px;
        padding:6px;
        padding-left: 15px;
        border:0;background:transparent;
        -webkit-appearance:none;
        border-radius:3px;
        color:#666;
        width:100%;

        option{
            background:#fff;
            color:black;
        }
        &.invalid{
            -webkit-box-shadow:0 0 3px 1px #e21824,inset 0 0 3px #e21824;
            -moz-box-shadow:0 0 3px 1px #e21824,inset 0 0 3px #e21824;
            box-shadow:0 0 3px 1px #e21824,inset 0 0 3px #e21824;
        }
        &:focus{
            outline: none;
            box-shadow: none;
        }

        &::-ms-expand {
            display: none;
        }
    }

    &:focus {
        -webkit-box-shadow:0 0 3px 1px #2c7fcd,inset 0 0 3px #2c7fcd;
        -moz-box-shadow:0 0 3px 1px #2c7fcd,inset 0 0 3px #2c7fcd;
        box-shadow:0 0 3px 1px #2c7fcd,inset 0 0 3px #2c7fcd;
    }
}


.select select,x:-moz-any-link{
    padding:8px 7px 7px 6px
}

</style>
