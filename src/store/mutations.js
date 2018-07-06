import { setLocalStorage }  from '../utils/local-storage';

export default {
    toggleProcessingState (state) {
        state.isProcessing = !state.isProcessing;
    },
    setTechnicalError (state, payload) {
        state.hasTechnicalError = payload ? true : false;
    },
    setLastRequestUrl (state, url) {
        state.lastRequestUrl = url;
    }
}