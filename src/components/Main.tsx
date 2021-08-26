import React from 'react'
import '../style/Mail.css'
import Loader from "./Loader";
import {connect} from 'react-redux';
import {sortElectric, sortId} from "../redux/action";
import Electronic from "./Electronic";
import {UseState} from "../redux/mainReducer";
import Title from "./Title";
import Cash from "./Cash";

const mapStateToProps = (state: { main: UseState }) => ({
    devicesOnline: state.main.devicesOnline,
    loading: state.main.loading,
    whatTitleOn: state.main.whatTitleOn,
    cashBox: state.main.cashBox
})

const mapDispatchToProps = ({
   sortId, sortElectric
})

interface Props {
    cashBox: any[]
    devicesOnline: any[],
    loading: boolean;
    whatTitleOn: string
    sortId: any
    sortElectric: any
}

const Main$ = (props: Props) => {

    return (
        <div className='wrapper'>
            {props.loading ? <Loader/> : null}
            <Title/>
            {props.whatTitleOn === 'cash' ?
                <Cash
                    cashBox = {props.cashBox}
                    sortId={props.sortId}
                />
                :
                <Electronic
                    sortElectric = {props.sortElectric}
                    devicesOnline={props.devicesOnline}
                />}
        </div>
    )
}

const Main = connect(mapStateToProps, mapDispatchToProps)(Main$)

export default Main
