import { useState } from "react";
import { Link } from "react-router-dom";

const Room = ({rooms, select}) =>{
    
    

    return(
        <div>
            {rooms.map((room) => (
                <div key = {room.id} className = "border border-2 p-2 m-3">
                    <h2>{room.hotelName}</h2>
                    <span>{room.location}</span><br/>
                    <span>{room.roomType}</span><br/>
                    <span>{room.bedAmount} {room.bedType} Beds</span><br/>
                    <span>Price: ${room.roomPrice}</span>
                    <br/><br/>
                    
                    <button type = "button" className = "btn bg-success btn-lg mx-3" onClick ={() => select(room.id, room.roomType, room.roomPrice, room.bedAmount, room.bedType)} >Select</button>
                    
                </div>
            ))}
        </div>
    );
}

export default Room