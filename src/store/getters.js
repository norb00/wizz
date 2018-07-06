import { getLocalStorageItem } from '../utils/local-storage';

const basicUrl = 'https://mock-air.herokuapp.com/';

export default {
    searchFlights: (state, { travelDate, departureStation, arrivalStation }) => {

//        const assets = basicUrl + 'asset/stations';
//        const search = basicUrl + 'search?departureStation=BUD&arrivalStation=BCN&date=2018-07-03';

        const parameters = [
            {
                name: 'departureStation',
                value: departureStation
            },
            {
                name: 'arrivalStation',
                value: arrivalStation
            },
            {
                name: 'date',
                value: travelDate
            }
        ];

        const searchQuery = parameters.map(parameter => `${encodeURIComponent(parameter.name)}=${encodeURIComponent(parameter.value)}`).join('&');

        return `${basicUrl}search?${searchQuery}`;
    },

    getStations: (state) => {
        return `${basicUrl}asset/stations`;
    }

}