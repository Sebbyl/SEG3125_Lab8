import {Link} from 'react-router-dom'
import { useHistory } from 'react-router';

const ReservationConfirmation = () =>{
    let hotelName = JSON.parse(sessionStorage.getItem('name'))
    let location = JSON.parse(sessionStorage.getItem("location"))
    let fromDate = JSON.parse(sessionStorage.getItem("fromDate"))
    let toDate = JSON.parse(sessionStorage.getItem("toDate"))
    let guests = JSON.parse(sessionStorage.getItem("guests"))
    let lodging = JSON.parse(sessionStorage.getItem("lodging"))
    let price = JSON.parse(sessionStorage.getItem("price"))
    let roomType = JSON.parse(sessionStorage.getItem("roomType"))
    let roomPrice = JSON.parse(sessionStorage.getItem("roomPrice"))
    let bedAmount = JSON.parse(sessionStorage.getItem("bedAmount"))
    let bedType = JSON.parse(sessionStorage.getItem("bedType"))
    


    return(
        <div className = "container text-center">
            <p className = "border"><b>Reservation Confirmation</b></p>
            <p>You have reserved a {roomType} room for {guests} guests at the <b>{hotelName}</b> at the <b>{location}</b> location from <b>{fromDate}</b> to <b>{toDate}</b>.</p>
            <p>Room Information:</p>
            <span>Room Type: {roomType}</span><br/>
            <span>Amount of Beds: {bedAmount}</span><br/>
            <span>Bed type: {bedType}</span><br/>
            <span>total: ${roomPrice}</span><br/><br/>
            <Link to = "/">
                <button type = "button" className = "btn bg-success my-3">OK</button>
            </Link>
            
        </div>

    );
}

export default ReservationConfirmation