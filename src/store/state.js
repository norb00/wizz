import { getLocalStorageItem } from '../utils/local-storage';

export default {
    isProcessing: false,
    hasTechnicalError: false,
    lastRequestUrl: null,
    rawData: null, // getLocalStorageItem('rawData') || {},
}