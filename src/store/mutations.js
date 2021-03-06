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
    },
    setStations (state, data) {
        state.stations = data;
        setLocalStorage('stations', state.stations);
    },
    filterDestinations (state, airport) {
        if (airport) {
            const connections = state.stations.find(s => s.iata === airport).connections;
            state.filteredDestinations = state.stations.filter(station => {
                return connections.find(connection => connection.iata === station.iata);
            });
        } else {
            state.filteredDestinations = null;
        }
        setLocalStorage('filteredDestinations', state.filteredDestinations);
    },
    setFlights (state, data) {
        state.flights = data;
        setLocalStorage('flights', state.flights);
    },
    setReturnFlights (state, data) {
        state.returnFlights = data;
        setLocalStorage('returnFlights', state.returnFlights);
    },
    setDeparture (state, departure) {
        state.departure = departure;
        setLocalStorage('departure', state.departure);
    },
    setDestination (state, destination) {
        state.destination = destination;
        setLocalStorage('destination', state.destination);
    },
    setTravelDate (state, travelDate) {
        state.travelDate = travelDate;
        setLocalStorage('travelDate', state.travelDate);
    },
    setReturnDate (state, returnDate) {
        state.returnDate = returnDate;
        setLocalStorage('returnDate', state.returnDate);
    },
    addTicketToCart (state, ticket) {
        state.tickets.push(ticket);
    },
    removeTicket (state, ticket) {
        const ticketIndex = state.tickets.findIndex(
            t => ticket.ticket.fareSellKey === t.ticket.fareSellKey
        );
        state.tickets[ticketIndex].flight.remainingTickets++;
        state.tickets.splice(ticketIndex, 1);
    }
}