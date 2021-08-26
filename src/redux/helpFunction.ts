import {IFiltered} from "../components/Type/ICashBox";



export function filter <T extends IFiltered>(arr:Array<T>, text: string): Array<T>{
    for (let i = 0; i < arr.length; i++) {
        let result = false
        arr[i].isFilter = false
        if (arr[i].pharmacy.toLowerCase().includes(text.toLowerCase())) {
            result = true
        }
        if (result) {
            arr[i].isFilter = true
        }
    }
    return arr
}


