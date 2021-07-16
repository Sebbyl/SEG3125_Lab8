import {Link} from 'react-router-dom'
import { useState} from 'react';
import SelectHotel from './SelectHotel';
import { useHistory } from 'react-router';

const FindHotel = () =>{
    const [location, setLocation] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [guests, setGuests] = useState('');
    const [lodging, setLodging] = useState('');
    const [price, setPrice] = useState('');

    const history = useHistory()

    const saveInfo = (event) =>{
        event.preventDefault()
        

        //sessionStorage.setItem("test", JSON.stringify({location}))
        //let info = {location, fromDate, toDate, guests, lodging, price}

        sessionStorage.setItem('location', JSON.stringify(location))
        sessionStorage.setItem('fromDate', JSON.stringify(fromDate))
        sessionStorage.setItem('toDate', JSON.stringify(toDate))
        sessionStorage.setItem('guests', JSON.stringify(guests))
        sessionStorage.setItem('lodging', JSON.stringify(lodging))
        sessionStorage.setItem('price', JSON.stringify(price))
        //console.log(lodging)
        history.push('/SelectHotel') 
         
    }

    return(
        <div className = "container text-center">
           <p className = "border"><b>Step 1: </b>What type of hotel would you like?</p>
           <div>
                <form onSubmit ={saveInfo}>
                    <label for = "location">Location<span style = {{color:"red"}}>*</span></label><br/>
                    <input 
                        type = "text" 
                        id = "location" 
                        name = "find" 
                        value = {location}
                        onChange = {(e) => setLocation(e.target.value)}
                        required></input><br/><br/>

                    <label for = "toDate">Date<span style = {{color:"red"}}>*</span></label><br/>
                    <input 
                        type = "date" 
                        id = "fromDate" 
                        name = "find" 
                        value = {fromDate}
                        onChange = {(e) => setFromDate(e.target.value)}
                        required></input><span> - </span>
                    <input 
                        type = "date" 
                        id = "toDate" 
                        name = "find" 
                        value = {toDate}
                        onChange = {(e) => setToDate(e.target.value)}
                        required></input><br/><br/>

                    <label for = "guests">Guests<span style = {{color:"red"}}>*</span></label><br/>
                    <select 
                        type = "text" 
                        id = "guests" 
                        name = "find" 
                        style = {{width:'auto'}}
                        value = {guests}
                        onChange = {(e) => setGuests(e.target.value)}
                        required>
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                    </select><br/><br/>

                    <label for = "lodging">Lodging Type<span style = {{color:"red"}}>*</span></label><br/>
                    <select 
                        type = "text" 
                        id = "lodging" 
                        name = "find" 
                        style = {{width:'auto'}} 
                        value = {lodging}
                        onChange = {(e) => setLodging(e.target.value)}
                        required>
                    <option></option>
                    <option>Hotel</option>
                    <option>House</option>
                    </select><br/><br/>

                    <label for = "price">Price Range (Per night)</label><br/>
                    <select 
                        type = "text" 
                        id = "price" 
                        name = "find" 
                        style = {{width:'auto'}}
                        value = {price}
                        onChange = {(e) => setPrice(e.target.value)}
                        >
                        <option>Any</option>
                        <option>$0-$149</option>
                        <option>$150-$249</option>
                        <option>$250-$349</option>
                        <option>$450+</option>
                    </select><br/><br/>

                   
                    
                    <button type = "submit" className = "btn bg-success btn-lg" onClick ={() => saveInfo}>Next Step</button>
                    <br/><br/>
                    <Link to = "/">
                    <button type = "button" className = "btn bg-secondary">Main Page</button>
                    </Link><br/><br/>
                </form>
                
                
           </div>
        </div>
        
    );
}

export default FindHotel;