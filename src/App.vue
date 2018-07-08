<template>
  <div id="app">
    <search-panel></search-panel>
    <flights></flights>
    <cart></cart>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import AirportSelector from './components/AirportSelector';
import Flights from './components/Flights';
import Cart from './components/Cart';


export default {
  name: 'app',
  components: {
    HelloWorld,
    AppHeader,
    SearchPanel,
    AirportSelector,
    Flights,
    Cart
  }
}
</script>

<style lang="scss">

    @import './assets/reset';
    @import './assets/mixins';
    @import './assets/variables';
    @import './assets/elements';

    #app {
        position: relative;
        background: $color-beige;
        min-height: 100vh;
    }

    .app-content-wrapper {
        margin: s(-1) auto s(1);
        width: 90%;
        max-width: 1260px;
    }
</style>
