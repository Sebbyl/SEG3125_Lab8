import {Link} from 'react-router-dom'
import { useState, useEffect} from 'react';

const ViewReservation = () =>{
    const[rooms, setRooms] = useState([
        {hotelName: "Best Eastern", location: "Bahamas", roomType: "Standard", roomPrice: 100, bedAmount:1, bedType:"Queen", id:1},
        {hotelName: "Best Eastern", location: "Bahamas", roomType: "Penthouse", roomPrice: 500,bedAmount:2, bedType:"King", id:2},

        {hotelName: "Best Eastern", location: "Edinburgh", roomType: "Standard", roomPrice: 300,bedAmount:2, bedType:"Queen", id:3},
        {hotelName: "Best Eastern", location: "Edinburgh", roomType: "Deluxe", roomPrice: 800,bedAmount:3, bedType:"King", id:4},

        {hotelName: "Faremint", location: "Madrid", roomType: "Standard", roomPrice: 100,bedAmount:1, bedType:"Single", id:5},
        {hotelName: "Faremint", location: "Madrid", roomType: "Deluxe", roomPrice: 400,bedAmount:1, bedType:"Queen", id:6},

        {hotelName: "Faremint", location: "Ottawa", roomType: "Standard", roomPrice: 100,bedAmount:1, bedType:"double", id:7},
        {hotelName: "Faremint", location: "Ottawa", roomType: "Deluxe", roomPrice: 500,bedAmount:2, bedType:"King", id:8},

        {hotelName: "Sunrise Lodge", location: "Ottawa", roomType: "Standard", roomPrice: 200,bedAmount:1, bedType:"Queen", id:9},
        {hotelName: "Sunrise Lodge", location: "Ottawa", roomType: "Deluxe", roomPrice: 700,bedAmount:1, bedType:"King", id:10},

        {hotelName: "Sunrise Lodge", location: "Edinburgh", roomType: "Standard", roomPrice: 100,bedAmount:1, bedType:"double", id:11},
        {hotelName: "Sunrise Lodge", location: "Edinburgh", roomType: "Deluxe", roomPrice: 500,bedAmount:3, bedType:"Queen", id:12},

        {hotelName: "Sebby's Home", location: "Bahamas",price: 250, type: "House",Rating:4.2, id: 13,},
        {hotelName: "Martina's Home", location: "Madrid", price: 500, type: "House",Rating:4.6, id: 14,},


    ])

    useEffect(()=>{
        let roomID = sessionStorage.getItem('roomID')
        
        const newRooms = rooms.filter(room => room.id == roomID );
        setRooms(newRooms)

    },[])

    const cancel = (id) =>{
        const newRooms = rooms.filter(room => room.id != id  && room.id == id);
        setRooms(newRooms)
        sessionStorage.setItem('roomID', '')
    }

    return(
        <div className = "container text-center">
            <p className = "border"><b>My Reservations</b></p>
                <div>
                {rooms.map((room) => (
                    <div key = {room.id} className = "border border-2 p-2 m-3">
                        <h2>{room.hotelName}</h2>
                        <span>{room.location}</span><br/>
                        <span>{room.roomType}</span><br/>
                        <span>{room.bedAmount} {room.bedType} Beds</span><br/>
                        <span>Price: ${room.roomPrice}</span>
                        <br/><br/>
                        
                        <button type = "button" className = "btn bg-success btn-lg mx-3" onClick ={() => cancel(room.id)} >Cancel Reservation</button>
                        <Link to = "Rate">
                            <button type = "button" className = "btn bg-success btn-lg mx-3"  >Rate Reservation</button>
                        </Link>
                        
                        
                    </div>
                ))}
                </div>
            <Link to = "/">
                <button type = "button" className = "btn bg-secondary">Main Page</button>
            </Link><br/><br/>
        </div>
    );
}

export default ViewReservation;