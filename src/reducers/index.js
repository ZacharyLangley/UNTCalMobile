import {
    FETCH_EVENTS,
    FETCH_FILTERS,
    ADD_FILTER,
    REMOVE_FILTER,
    SET_DATE
} from '../actions/index';

let defaultState = {
    events: [],
    filters: [],
    selectedEvent: '',
    selectedFilters: [],
    selectedDate: new Date(),
    error: false
}

export default (state = defaultState, action) => {
    switch(action.type){
        case FETCH_EVENTS:
            return {
                ...state,
                events: actions.events
            }
        case FETCH_FILTERS:
            return {
                ...state,
                filters: actions.filters
            }
        case ADD_FILTER:
            return {
                ...state,
                selectedFilters: state.selectedFilters.concat(action.newFilter)
            }
        case REMOVE_FILTER:
            return {
                ...state,
                selectedFilters: state.selectedFilters.filter(item => item !== action.newFilter)
            }
        case SET_DATE:
            return {
                ...state,
                selectedDate: action.selectedDate
            }
        default:
            return {
                ...state
            }
    }
};