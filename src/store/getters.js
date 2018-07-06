import { getLocalStorageItem } from '../utils/local-storage';

export default {
    requestUrl: (state, { selectedProjectKeys, fromDate, toDate })) => {
        const basicUrl = 'https://mock-air.herokuapp.com/';

        const assets = basicUrl + 'asset/stations';
        const search = basicUrl + 'search?departureStation=BUD&arrivalStation=BCN&date=2018-07-03';
        const parameters = [
            {
                name: 'projects',
                value: selectedProjectKeys
            },
            {
                name: 'fromDate',
                value: fromDate
            },
            {
                name: 'toDate',
                value: toDate
            },
            {
                name: 'showComment',
                value: true
            }
        ];

        const searchQuery = parameters.map(parameter => `${encodeURIComponent(parameter.name)}=${encodeURIComponent(parameter.value)}`).join('&');

        return `/api/rest/findIssues?${searchQuery}`;
    }
}