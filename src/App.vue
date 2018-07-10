<template>
    <div id="app" class="d-flex">
        <div class="search-and-results d-flex flex-column w-75 p-3">
            <div class="search">
                <search-panel></search-panel>
            </div>
            <div class="d-flex container border border-secondary p-2 mh-0">
                <flights></flights>
            </div>
        </div>
        <div class="tickets w-25 py-3 pr-3">
            <cart></cart>
        </div>
    </div>
</template>

<script>
import SearchPanel from "./components/SearchPanel";
import AirportSelector from "./components/AirportSelector";
import Flights from "./components/Flights";
import Cart from "./components/Cart";

export default {
  name: "app",
  components: {
    SearchPanel,
    AirportSelector,
    Flights,
    Cart
  }
};
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    @import "./assets/reset";
    @import '../node_modules/bootstrap/scss/bootstrap.scss';

    .flights {
        width: 50%;
    }
    .flighstbox {
        justify-content: space-around;
        flex: 1 30%;
    }
    .tickets {
        flex-direction: row;
    }
</style>
