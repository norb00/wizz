import { formatDate } from '../utils/date-functions';
const basicUrl = 'https://mock-air.herokuapp.com/';

export default {
    searchFlights: (state) => {

        const parameters = [
            {
                name: 'departureStation',
                value: state.departure
            },
            {
                name: 'arrivalStation',
                value: state.destination
            },
            {
                name: 'date',
                value: formatDate(state.travelDate)
            }
        ];

        const searchQuery = parameters.map(parameter => `${encodeURIComponent(parameter.name)}=${encodeURIComponent(parameter.value)}`).join('&');

        return `${basicUrl}search?${searchQuery}`;
    },

    searchReturnFlights: (state) => {

        if (state.returnDate) {
            const parameters = [
                {
                    name: 'departureStation',
                    value: state.destination
                },
                {
                    name: 'arrivalStation',
                    value: state.departure
                },
                {
                    name: 'date',
                    value: formatDate(state.returnDate)
                }
            ];
    
            const searchQuery = parameters.map(parameter => `${encodeURIComponent(parameter.name)}=${encodeURIComponent(parameter.value)}`).join('&');
    
            return `${basicUrl}search?${searchQuery}`;
        }
    },
        
    getStations: () => {
        return `${basicUrl}asset/stations`;
    }

}