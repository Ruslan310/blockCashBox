import {IFiltered} from "./ICashBox";

export interface IElectric extends IFiltered {
    pharmacy: string
    idPharmacy: number
    idCashBox: number
    URI: string
    FN: string
    EmulEKKA: string
    ip: string
    isFilter: boolean
}

export enum EElectric {
    pharmacy = 'pharmacy',
    idPharmacy = 'idPharmacy',
    idCashBox = 'idCashBox',
    URI = 'URI',
    FN = 'FN',
    EmulEKKA = 'EmulEKKA',
    ip = 'ip',
    isFilter = 'isFilter'
}



