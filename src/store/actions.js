export default {
    fetchStations ({ getters, commit }) {
        const url = getters.getStations;

        /* if (url === localStorage.getItem('wizz.rawDataQuery')) {
            return;
        }*/
        commit('toggleProcessingState');
        commit('setTechnicalError', false);
        commit('setStations', null);

        if (localStorage.getItem('wizz.debug')) {
            // commit('setStations', getMockRawData());
        } else {
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

        /* if (url === localStorage.getItem('wizz.rawDataQuery')) {
            return;
        }*/
        commit('toggleProcessingState');
        commit('setTechnicalError', false);
        commit('setStations', null);

        if (localStorage.getItem('wizz.debug')) {
            //commit('setStations', getMockRawData());
        } else {
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
    }
}