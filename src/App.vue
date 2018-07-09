<template>
  <div id="app" class="page-layout">
        <div class="search">
            <search-panel></search-panel>
        </div>
        <div class="results">
        <div class="flighstbox">
            <flights></flights>
        </div>
        <div class="tickets">
            <cart></cart>
        </div>
      </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import AirportSelector from "./components/AirportSelector";
import Flights from "./components/Flights";
import Cart from "./components/Cart";

export default {
  name: "app",
  components: {
    HelloWorld,
    AppHeader,
    SearchPanel,
    AirportSelector,
    Flights,
    Cart
  }
};
</script>

<style lang="scss">
@import "./assets/reset";
@import "./assets/mixins";
@import "./assets/variables";
@import "./assets/elements";

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

.page-layout {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100vh;
    height: 90vh;
}
.search {

}
.results {
    display: flex;
    justify-content: center;
}
.flights {
    width: 50%;
}
.flighstbox {
    justify-content: space-around;
    display: flex;
    width: 90vh;
    flex: 1 30%;
}
.tickets {
    flex-direction: row;
    width: 10vh;
}
</style>
