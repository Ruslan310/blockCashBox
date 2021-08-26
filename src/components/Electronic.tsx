import React from 'react';
import {EElectric} from "./Type/IElectro";


interface Props {
    devicesOnline: any[]
    sortElectric: any
}

const Electronic = (props: Props) => {
    return (
        <table className='table'>
            <thead>
            <tr>
                <th className='pharmacyFN'>ID</th>
                <th onClick={() => {
                    props.sortElectric(EElectric.pharmacy)}}
                >Аптека
                </th>
                <th className='pharmacyFN'>Фискальный</th>
                <th className='pharmacyFN'>ID кассы</th>
                <th onClick={() => {
                    props.sortElectric(EElectric.URI)}}
                    className='pharmacyFN'
                >Режим
                </th>
                <th className='pharmacyFN'>IP</th>
                <th className='pharmacyFN'>Тип</th>
            </tr>
            </thead>
            <tbody>
            {props.devicesOnline && props.devicesOnline.map(post => {
                    if (post.isFilter) {
                        return (
                            <tr key={post.FN} className = {post.URI === 'OnLine' ?
                                    'redLine' : ''}>
                                <td>{post.idPharmacy}</td>
                                <td className='pharmacyName'>{post.pharmacy}</td>
                                <td  className='pharmacyFN'>{post.FN}</td>
                                <td>{post.idCashBox}</td>
                                <td >{post.URI}</td>
                                <td>{post.ip}</td>
                                <td>{post.EmulEKKA}</td>
                            </tr>
                        )
                    } else {
                        return <div> </div>
                    }
                }
            )}
            </tbody>
        </table>
    );
};


export default Electronic;