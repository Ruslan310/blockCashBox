export interface CashBox extends IFiltered {
    pharmacy: string
    vzh: string
    ip: string
    timeToBlock: number
    grafik: string
    timeBlock: string
    idPharmacy: number
    isFilter: boolean
}

export interface IFiltered {
    isFilter: boolean
    pharmacy: string
}

export enum ECashBox {
    pharmacy = 'pharmacy',
    vzh = 'vzh',
    ip = 'ip',
    timeToBlock = 'timeToBlock',
    grafik = 'grafik',
    timeBlock = 'timeBlock',
    idPharmacy = 'idPharmacy',
    isFilter = 'isFilter',
}

