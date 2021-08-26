import {
    GET_FETCH_CASH_BOX,
    FETCH_CASH_BOX,
    FETCH_ELECTRIC,
    GET_FETCH_ELECTRIC
} from "../redux/action";

import {put, takeLatest, all} from 'redux-saga/effects';

const formatBlockTime = (dateString) => {
    if (!dateString) {
        return '-'
    }
    let allDate = dateString.split(' ')
    let time = allDate[1].substring(0, 5)
    let date = allDate[0].split('-')

    return `${time} ${date[2]}.${date[1]}.${date[0]}`
}

/**saga getPharmacy */
function* fetchCashBox() {
    let data = yield fetch(process.env.REACT_APP_API+'arm')
        .then(response => response.json());
    let newList = []
    data[0].map(item => {
        let parsed = {}
        parsed.pharmacy = item.Apteka
        parsed.vzh = item.vzh
        parsed.ip = item.ip
        parsed.timeToBlock = item.time_to_block
        parsed.grafik = item.days1 === '00.00' ?
                        'круглосуточная' :
                        item.days1+' - '+item.days2
        parsed.timeBlock = formatBlockTime(item.time_block)
        parsed.idPharmacy = item.id_apteka
        parsed.isFilter = true
        return newList.push(parsed)
    })
    yield put({type: GET_FETCH_CASH_BOX, data: newList});
}

function* fetchCashBoxWatcher() {
    yield takeLatest(FETCH_CASH_BOX, fetchCashBox)
}

/**saga CashBox */
function* fetchElectric() {
    let data = yield fetch(process.env.REACT_APP_API+'ecrConst')
       .then(response => response.json());
    let newList = []
    data.map(item => {
        let parsed = {}
        parsed.pharmacy = item.Apteka
        parsed.idPharmacy = item.id_apteka
        parsed.idCashBox = item.id_kassa
        parsed.URI = item.URI === 'https://web.cashdesk.com.ua/api/v2/' ? 'OnLine' : 'OffLine'
        parsed.FN = item.FN
        parsed.EmulEKKA = item.EmulEKKA ? 'балалайка' : 'касса'
        parsed.ip = item._Fld10284
        parsed.isFilter = true
        return newList.push(parsed)
    })
    yield put({type: GET_FETCH_ELECTRIC, data: newList});
}

function* fetchElectricWatcher() {
    yield takeLatest(FETCH_ELECTRIC, fetchElectric)
}

export default function* rootSaga() {
    yield all([
        fetchCashBoxWatcher(), fetchElectricWatcher()
    ])
}
  