<template>
  <div id="app">
    <search-panel></search-panel>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import AirportSelector from './components/AirportSelector';


export default {
  name: 'app',
  components: {
    HelloWorld,
    AppHeader,
    SearchPanel,
    AirportSelector
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
