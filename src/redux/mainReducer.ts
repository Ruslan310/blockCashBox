import {
    FETCH_CASH_BOX,
    GET_FETCH_CASH_BOX,
    SET_FILTER_EL,
    SET_FILTER_CASH,
    RESET_FILTER_CASH,
    RESET_FILTER_EL,
    SET_SORT,
    FETCH_ELECTRIC,
    GET_FETCH_ELECTRIC,
    WHAT_TITLE_ON,
    SORT_ELECTRIC
} from "./action";
import {CashBox, ECashBox} from "../components/Type/ICashBox";
import {IElectric, EElectric} from "../components/Type/IElectro";
import {filter} from "./helpFunction";

interface ActionInterface {
    type: string
    value: string
    key: ECashBox
    elKey: EElectric
    data: any[]
}

export interface UseState {
    loading: boolean
    devicesOnline: Array<IElectric>
    cashBox: Array<CashBox>
    direction: boolean
    elDirection: boolean
    whatTitleOn: string
}


export const initialState: UseState = {
    loading: false,
    devicesOnline: [],
    cashBox: [],
    direction: true,
    elDirection: true,
    whatTitleOn: 'cash',
}

export const mainReducer = (state = initialState, action: ActionInterface): UseState => {
    switch (action.type) {
        case WHAT_TITLE_ON:
            return {...state, whatTitleOn: action.value}
        case FETCH_CASH_BOX:
            return {...state, loading: true}
        case GET_FETCH_CASH_BOX:
            return {...state, cashBox: action.data, loading: false}
        case FETCH_ELECTRIC:
            return {...state, loading: true}
        case GET_FETCH_ELECTRIC:
            return {...state, devicesOnline: action.data, loading: false}
        case SET_FILTER_EL:
            let stEl: Array<IElectric> = state.devicesOnline.slice()
            stEl = filter(stEl, action.value)
            return {...state, devicesOnline: stEl}
        case SET_FILTER_CASH:
            let stCash: Array<CashBox> = state.cashBox.slice()
            stCash = filter(stCash, action.value)
            return {...state, cashBox: stCash}
        case RESET_FILTER_CASH:
            let resetFilterListCash: Array<CashBox> = state.cashBox.slice()
            resetFilterListCash.filter(el => el.isFilter = true)
            return {...state, cashBox: resetFilterListCash}
        case RESET_FILTER_EL:
            let resetFilterListEl: Array<IElectric> = state.devicesOnline.slice()
            resetFilterListEl.filter(el => el.isFilter = true)
            return {...state, devicesOnline: resetFilterListEl}
        case SET_SORT:
            let key: ECashBox = action.key
            let direction = state.direction
            let SortIP = state.cashBox.slice()

            SortIP.sort( (a: CashBox) => {
                    if (!a[key]) return 1
                    else return -1
                })
            direction = direction && !direction
            return {...state, cashBox: SortIP, direction: direction}
        case SORT_ELECTRIC:
            let elKey: EElectric = action.elKey
            let elDirection = state.elDirection
            let elSort = state.devicesOnline.slice()

            elSort.sort( (a: IElectric) => {
                if (!a[elKey]) return 1
                else return -1
            })
            elDirection = elDirection && !elDirection
            return {...state, devicesOnline: elSort, elDirection: elDirection}
        default:
            return state
    }
}
