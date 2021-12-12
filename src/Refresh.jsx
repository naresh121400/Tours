import React from 'react';
const Refresh = ({ getTours }) => {
    return ( <div>
        <h2>No tours Left</h2>
        <button className="btn bg-info" onClick={getTours}>Refresh</button>
    </div> );
}
 
export default Refresh;