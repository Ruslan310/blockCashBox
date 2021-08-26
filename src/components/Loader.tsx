import React from 'react';

const Loader = () => {
    return (
        <div className='loaderWrapper'>
            <div className="loadSpinner">
                <div className="loader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;