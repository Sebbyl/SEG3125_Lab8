import {Link} from 'react-router-dom'
import { useState, useEffect} from 'react';
import Room from './Room'
import { useHistory } from 'react-router';

const SelectRoom = () =>{

    const history = useHistory()

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


    ])

    useEffect(()=>{
        let userLocation = sessionStorage.getItem("location")
        let parsedLocation = JSON.parse(userLocation)
        let hName = sessionStorage.getItem("name")
        let parsedName = JSON.parse(hName)

        const newRooms = rooms.filter(room => room.location == parsedLocation && room.hotelName == parsedName);
        setRooms(newRooms)
    },[])

    const select = (id, roomType, roomPrice, bedAmount, bedType) =>{
        sessionStorage.setItem('roomID', JSON.stringify(id))
        sessionStorage.setItem('roomType', JSON.stringify(roomType))
        sessionStorage.setItem('roomPrice', JSON.stringify(roomPrice))
        sessionStorage.setItem('bedAmount', JSON.stringify(bedAmount))
        sessionStorage.setItem('bedType', JSON.stringify(bedType))
        history.push('/PersonalInformation') 
    }

    return(
        <div className = "container text-center">
            <p className = "border"><b>Step 3: </b>Select Hotel Room</p>
            <div>
                <Room rooms = {rooms} select = {select}/>
            </div><br/><br/>
            <Link to = "/SelectHotel">
                    <button type = "button" className = "btn bg-secondary">Previous Step</button>
            </Link><br/><br/>
        </div>
    );

}

export default SelectRoom;