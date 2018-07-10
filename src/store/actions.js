export default {
    fetchStations ({ getters, commit }) {
        const url = getters.getStations;

        commit('toggleProcessingState');
        commit('setTechnicalError', false);
        commit('setStations', null);

        if (url) {
            fetch(url).then(function (response) {
                return response.json();
            }).then(function (rawData) {
                commit('setStations', rawData);
            }).catch((error) => {
                console.error(error);
                commit('setTechnicalError', true);
            }).then(() => {
                commit(`setLastRequestUrl`, url);
                commit('toggleProcessingState');
            });
        }
    },

    fetchFlights ({ getters, commit }) {

        const url = getters.searchFlights;

        const returnFlightUrl = getters.searchReturnFlights;

        commit('toggleProcessingState');
        commit('setTechnicalError', false);

        if (url) {
            fetch(url).then(function (response) {
                return response.json();
            }).then(function (rawData) {
                commit('setFlights', rawData);
            }).catch((error) => {
                console.error(error);
                commit('setTechnicalError', true);
            }).then(() => {
                commit(`setLastRequestUrl`, url);
                commit('toggleProcessingState');
            });
        }

        if (returnFlightUrl){
            fetch(returnFlightUrl).then(function (response) {
                return response.json();
            }).then(function (rawData) {
                commit('setReturnFlights', rawData);
            }).catch((error) => {
                console.error(error);
                commit('setTechnicalError', true);
            }).then(() => {
                commit(`setLastRequestUrl`, url);
                commit('toggleProcessingState');
            });
        } else {
            commit('setReturnFlights', null);
        }
    }
}