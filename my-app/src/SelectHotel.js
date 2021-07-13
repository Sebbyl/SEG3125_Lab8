import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';
import Hotel from './Hotel';
import FindHotel from './FindHotel';
import PersonalInformation from './PersonalInformation';
import SelectRoom from './SelectRoom';
import { useHistory } from 'react-router';

const SelectHotel = () => {

    const history = useHistory()



    const[hotels, setHotels] = useState([
        {name: "Best Eastern", location: "Bahamas", highestPrice: 500, lowestPrice: 100, type: "Hotel", Rating:4.5, id: 1,},
        {name: "Best Eastern", location: "Edinburgh", highestPrice: 1000, lowestPrice: 300, type: "Hotel", Rating:4,id: 2,},
        {name: "Faremint", location: "Madrid", highestPrice: 400, lowestPrice: 100, type: "Hotel",Rating:3.5, id: 3,},
        {name: "Faremint", location: "Ottawa", highestPrice: 500, lowestPrice: 100, type: "Hotel",Rating:4.9, id: 4,},
        {name: "Sunrise Lodge", location: "Ottawa", highestPrice: 700, lowestPrice: 200, type: "Hotel",Rating:4.5, id: 5,},
        {name: "Sunrise Lodge", location: "Edinburgh", highestPrice: 500, lowestPrice: 100, type: "Hotel",Rating:3.8, id: 6,},
        {name: "Sebby's Home", location: "Bahamas",price: 250, type: "House",Rating:4.2, id: 13,},
        {name: "Martina's Home", location: "Madrid", price: 500, type: "House",Rating:4.6, id: 14,},
    ]);

    const select = (type, name,id) =>{
        //const newHotels = hotels.filter(hotel => hotel.id  > 1 && hotel.type);
         sessionStorage.setItem('name', JSON.stringify(name))
        if (type === "House"){
            sessionStorage.setItem('roomID', id )
            history.push('/PersonalInformation')
            
        }else{
            history.push('/SelectRoom') 
        }
    }
    useEffect(() =>{
        
        let userLocation = sessionStorage.getItem("location")
        let userType = sessionStorage.getItem("lodging")
        //console.log(userLocation)
        let parsedLocation = JSON.parse(userLocation)
        let parsedType = JSON.parse(userType)
        
        console.log(parsedType)
        console.log(parsedLocation)
        // console.log(hotels)
        const newHotels = hotels.filter(hotel => hotel.location == parsedLocation && hotel.type == parsedType);
        setHotels(newHotels)
    }, [])


    return(
        <div className = "container text-center">
            <p className = "border"><b>Step 2: </b>Select Hotel</p>
            <div>
                <Hotel hotels = {hotels} select = {select}/>
            </div><br/><br/>
            <Link to = "/FindHotel">
                    <button type = "button" className = "btn bg-secondary text-white">Previous Step</button>
            </Link><br/><br/>
        </div>
    );
    
}

export default SelectHotel;