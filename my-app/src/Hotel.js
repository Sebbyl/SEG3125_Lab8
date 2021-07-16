import { useState } from "react";
import { Link } from "react-router-dom";

const Hotel = ({hotels, select}) =>{
    //console.log(hotels)

    return(
        <div >

            {hotels.map((hotel) => (
                <div key = {hotel.id} className = "border border-2 p-2 m-3">
                    <h2>{hotel.name}</h2>
                    <span>Rating: {hotel.Rating} Stars</span><br/><br/>
                    
                    <button type = "button" className = "btn bg-success btn-lg mx-3" onClick ={() => select(hotel.type, hotel.name, hotel.id)}>Select</button>
                    
                </div>
            ))}
        </div>
    );
}

export default Hotel