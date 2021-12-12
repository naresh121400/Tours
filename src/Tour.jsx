import React, { useState } from 'react';
const Tour = ({ tour, deleteTour }) => {
    const { id, image, name, info, price } = tour;
    const[isMore, setIsMore] = useState(false);
    const[about, setAbout] = useState(info.substring(0, 101)+'...');

    const readMoreLess = () => {
        if(isMore){
            setAbout(info.substring(0, 101));
            setIsMore(!isMore);
        }
        else{
            setAbout(info);
            setIsMore(!isMore);
        }
    };
    return ( 
        <div className="card mx-auto w-50 my-5" >
        <img className="card-img-top" src={image} alt="tour" />
        <div className="card-body">
            <table className="w-100 my-2">
                <tr>
                    <td style={{textAlign: 'left'}}><h6 className="card-title">{name}</h6></td>
                    <td style={{ textAlign: 'right'}}><b style={{ color: 'dodgerblue'}}>${price}</b></td>
                </tr>
             </table>    
            <p style={{ textAlign: 'justify'}}>
                {about}
                <span><button className="btn" style={{ color: 'dodgerblue'}} onClick={readMoreLess}>{isMore ? "Read Less" : "Read More"}</button></span>
            </p>
            <button className='btn btn-sm btn-outline-danger' onClick={() => deleteTour(id)}>Not interested</button>
        </div>
        </div>
     );
}
 
export default Tour;