import axios from 'axios';
import {
    FETCH_FILTERS,
    REMOVE_FILTER,
    ADD_FILTER,
    ROOT_URL,
} from './index';

export function loadFilters(){

}

export function addFilter(filter){
    return {
        type: ADD_FILTER,
        newFilter: filter
    }
}

export function removeFilter(filter){
    return {
        type: REMOVE_FILTER,
        newFilter: filter
    }
}

export function updateFilters(filtersData){
    return {
        type: FETCH_FILTERS,
        filters: filtersData
    }
}