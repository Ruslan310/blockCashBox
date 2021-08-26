import {EElectric} from "../components/Type/IElectro";
import {ECashBox} from "../components/Type/ICashBox";

export const FETCH_CASH_BOX = 'FETCH_CASH_BOX'
export const GET_FETCH_CASH_BOX = 'GET_FETCH_CASH_BOX'
export const SET_FILTER_EL = 'SET_FILTER_EL'
export const RESET_FILTER_CASH = 'RESET_FILTER_CASH'
export const RESET_FILTER_EL = 'RESET_FILTER_EL'
export const SET_SORT = 'SET_SORT'
export const FETCH_ELECTRIC = 'FETCH_ELECTRIC'
export const GET_FETCH_ELECTRIC = 'GET_FETCH_ELECTRIC'
export const WHAT_TITLE_ON = 'WHAT_TITLE_ON'
export const SORT_ELECTRIC = 'SORT_ELECTRIC'
export const SET_FILTER_CASH = 'SET_FILTER_CASH'



export const setFilterEl = (value:string) => ({
    type: SET_FILTER_EL, value
})
export const setFilterCash = (value:string) => ({
    type: SET_FILTER_CASH, value
})
export const resetFilterCash = () => ({
    type: RESET_FILTER_CASH
})
export const resetFilterEl = () => ({
    type: RESET_FILTER_EL
})
export const sortId = (key:ECashBox) => ({
    type: SET_SORT, key
})
export const sortElectric = (elKey:EElectric) => ({
    type: SORT_ELECTRIC, elKey
})
export const fetchCashBox = () => ({
    type: FETCH_CASH_BOX
})
export const fetchElectric = () => ({
    type: FETCH_ELECTRIC
})
export const whatTitle = (value:string) => ({
    type: WHAT_TITLE_ON, value
})