import axios from 'axios';
import {
    FETCH_EVENTS,
    SET_DATE,
    ROOT_URL
} from './index'

export function loadEvents(){

}

export function updateEvents(eventsData){
    return {
        type: FETCH_EVENTS,
        events: eventsData
    }
}

export function updateSelectedDate(selectedDate){
    return {
        type: SET_DATE,
        selectedDate: selectedDate
    }
}