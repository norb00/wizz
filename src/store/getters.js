const basicUrl = 'https://mock-air.herokuapp.com/';

export default {
    searchFlights: (state) => {

//        const assets = basicUrl + 'asset/stations';
//        const search = basicUrl + 'search?departureStation=BUD&arrivalStation=BCN&date=2018-07-03';

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
                value: state.travelDate
            }
        ];

        const searchQuery = parameters.map(parameter => `${encodeURIComponent(parameter.name)}=${encodeURIComponent(parameter.value)}`).join('&');

        return `${basicUrl}search?${searchQuery}`;
    },

    searchReturnFlights: (state) => {

        //        const assets = basicUrl + 'asset/stations';
        //        const search = basicUrl + 'search?departureStation=BUD&arrivalStation=BCN&date=2018-07-03';
        
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
                    value: state.returnDate
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