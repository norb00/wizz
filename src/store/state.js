import { getLocalStorageItem }  from '../utils/local-storage';

export default {
    isProcessing: false,
    hasTechnicalError: false,
    lastRequestUrl: null,
    stations: null,
    flights: null,
    returnFlights: null,
    tickets: [],
    departure: getLocalStorageItem('departure') || null,
    destination: getLocalStorageItem('destination') || null,
    filteredDestinations: getLocalStorageItem('filteredDestinations') || null,
    travelDate: getLocalStorageItem('travelDate') || null,
    returnDate: getLocalStorageItem('returnDate') || null
}