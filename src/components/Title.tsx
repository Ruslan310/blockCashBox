import React, {useEffect, useState} from 'react';
import {Button, FormControl} from "react-bootstrap";
import {connect} from "react-redux";
import {setFilterEl, setFilterCash, whatTitle, resetFilterCash, resetFilterEl} from "../redux/action";
import {UseState} from "../redux/mainReducer";

const mapStateToProps = (state: { main: UseState }) => ({
    whatTitleOn: state.main.whatTitleOn,
    devicesOnline: state.main.devicesOnline
})

const mapDispatchToProps = ({
    resetFilterCash, setFilterCash, whatTitle, setFilterEl, resetFilterEl
})

interface Props {
    whatTitleOn: string,
    devicesOnline: any[]
    resetFilterCash: () => {}
    resetFilterEl: () => {}
    setFilterCash: (input: string) => {}
    setFilterEl: (input: string) => {}
    whatTitle: (page: string) => {}
}

const Title$ = (props: Props) => {

    const [input, setInput] = useState('')
    const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
        if (e.target.value.length > 3 && props.whatTitleOn === 'cash') {
            props.setFilterCash(e.target.value)
        }
        if (e.target.value.length > 3 && props.whatTitleOn === 'electric') {
            props.setFilterEl(e.target.value)
        }
    }
    const cashOn = () => {
        setInput('')
        props.whatTitleOn === 'cash' ?
            props.resetFilterCash() :
            props.resetFilterEl()

    }
    useEffect(() => {
        if (input.length < 1) {
            props.resetFilterCash()
            props.resetFilterEl()
        }
    }, [input]) // eslint-disable-line
    return (
        <div className='titleBody'>
            <div className='blockTitleButton'>
                <Button onClick={() => props.whatTitle('cash')}
                        variant={props.whatTitleOn === 'cash' ? "secondary" : "light"}
                        className='buttonTitle'>Блокировка кассовых</Button>
                <Button onClick={() => props.whatTitle("electric")}
                        className='buttonTitle'
                        variant={props.whatTitleOn === 'cash' ? "light" : "secondary"}
                >Электронные кассы</Button>
            </div>
            {props.whatTitleOn === 'electric' ?
                <div className='wrapperCountKass'>
                    <p className='nameCountKass'>Количество касс : </p>
                    <p className='countKass'>{props.devicesOnline?.length}</p>
                </div> : null}
            <div className='blockTitle'>
                {props.whatTitleOn === 'cash' ?
                    <p className='nameTitle'>Блокировка кассовых</p>
                    :
                    <p className='nameTitle'>Электронные кассы</p>
                }
                <FormControl onChange={filterHandler}
                             value={input}
                             className="inputSearch"
                             placeholder="Название точки"
                             type="text"/>
                <Button variant="warning" onClick={cashOn}>Х</Button>
            </div>
        </div>
    );
};
const Title = connect(mapStateToProps, mapDispatchToProps)(Title$)

export default Title;