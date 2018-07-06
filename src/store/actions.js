import { setLocalStorage }  from '../utils/local-storage';

export default {
    export default {
        fetchData ({ getters, commit }) {
            const url = getters.requestUrl;

            /* if (url === localStorage.getItem('blockometer.rawDataQuery')) {
                return;
            }*/
            commit('toggleProcessingState');
            commit('setTechnicalError', false);
            commit('setRawData', null);

            if (localStorage.getItem('blockometer.debug')) {
                commit('setRawData', getMockRawData());
            } else {
                fetch(url).then(function (response) {
                    return response.json();
                }).then(function (rawData) {
                    commit('setRawData', rawData);
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
}