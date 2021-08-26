import React from 'react';
import {ECashBox} from "./Type/ICashBox";

interface Props {
    cashBox: any[],
    sortId: any
}

const Cash = (props: Props) => {
    function formatTime(numb: number) {
        let seconds = numb * 60 * 60
        let hours = Math.floor(seconds / (60 * 60));
        seconds -= hours * (60 * 60);
        let minutes = Math.floor(seconds / (60));
        return hours + "ч - " + minutes + 'м';
    }
    return (
            <table className='table'>
                <thead>
                <tr>
                    <th className='tablePharmacy'>ID</th>
                    <th onClick={() => {
                        props.sortId(ECashBox.pharmacy)}}>Аптека
                    </th>
                    <th className='tablePharmacy'>ЗН РРО</th>
                    <th>IP кассы</th>
                    <th className='timeBlock' onClick={() => {
                        props.sortId(ECashBox.timeToBlock)}}>До блокировки
                    </th>
                    <th className='timeBlock'>Дата блокировки</th>
                    <th className='timeBlock'>График</th>
                </tr>
                </thead>
                <tbody>
                {props.cashBox && props.cashBox.map(post => {
                        if (post.isFilter) {
                            return (
                                <tr key={post.vzh}
                                className={post.timeToBlock < 2 ? 'redLine' : ''}
                                >
                                    <td className='pharmacyFN'>{post.idPharmacy}</td>
                                    <td className='pharmacyName'>{post.pharmacy}</td>
                                    <td className='pharmacyFN'>{post.vzh}</td>
                                    <td>{post.ip}</td>
                                    <td className='timeBlock'>{post.timeToBlock
                                    < 0 ? 'заблокирован'
                                        : formatTime(post.timeToBlock)}</td>
                                    <td className='timeBlock'>{post.timeBlock}</td>
                                    <td className='timeBlock'>{post.grafik}</td>
                                </tr>
                            )
                        }
                        else {
                            return <div> </div>
                        }
                    }
                )}
                </tbody>
            </table>
    );
};

export default Cash;