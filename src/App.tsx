import React, {useEffect} from 'react';
import Main from "./components/Main";
import {useDispatch} from "react-redux";
import {fetchCashBox, fetchElectric} from "./redux/action";

const App: React.FC = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchElectric())
        dispatch(fetchCashBox())
    }, [])// eslint-disable-line
    return (
        <div>
            <Main/>
        </div>
    );
};

export default App;