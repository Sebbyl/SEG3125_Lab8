import {Link} from 'react-router-dom'
import { useHistory } from 'react-router';
import { useState, useEffect} from 'react';

const PersonalInformation = () =>{
    var phoneNumRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    var creditCardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var CVVRegex = /^[0-9]{3,4}$/;
    const [phoneNumber,  setPhoneNumber] = useState('');
    const [creditCard, setCreditCard] = useState('');
    const [CVV, setCVV] = useState('');
    const [phoneErr, setPhoneErr] = useState(false);
    const [creditErr, setCreditError] = useState(false);
    const [CVVErr, setCVVError] = useState(false);

    const history = useHistory()
    const submitHandler = (event) =>{
        var flag  = false
        event.preventDefault()
        if (!phoneNumRegex.test(phoneNumber)) {
            setPhoneErr(true);
            var flag = true
         }
         if (!creditCardRegex.test(creditCard)) {
            setCreditError(true);
            var flag = true
         }
         if (!CVVRegex.test(CVV)) {
            setCVVError(true);
            var flag = true
         }
         if (!flag){
            history.push('/ReservationConfirmation') 
         }
        
    }

    return(
        <div className = "container text-center">
            <p className = "border"><b>Step 4: </b>Information</p>
                <form onSubmit ={submitHandler}>

                <label for = "name">Full Name<span style = {{color:"red"}}>*</span></label><br/>
                <input type = "text" id = "name" name = "info" required></input><br/><br/>
    
                <label for = "phoneNumber">Phone Number<span style = {{color:"red"}}>*</span></label><br/>
                <input 
                    type = "text" 
                    id = "phoneNumber" 
                    name = "info" 
                    placeholder = "(xxx) xxx-xxxx" 
                    value = {phoneNumber}
                    onChange = {(e) => setPhoneNumber(e.target.value)}
                    required></input><br/><br/>
                    {phoneErr && <span style = {{color:"red"}}>Your phone number is invalid!<br/></span>}
                    
                    
    
                <label for = "email">Email Address<span style = {{color:"red"}}>*</span></label><br/>
                <input type = "email" id = "email" name = "info" placeholder = "x@x.x" required></input><br/><br/>
    
                <label for = "cardNumber">Card Number<span style = {{color:"red"}}>*</span></label><br/>
                <input 
                    type = "text" 
                    id = "cardNumber" 
                    name = "info" 
                    value = {creditCard}
                    onChange = {(e) => setCreditCard(e.target.value)}
                    required></input><br/><br/>
                    {creditErr && <span style = {{color:"red"}}>Your credit card number is invalid!<br/></span>}
    
                <label for = "cvv">CVV<span style = {{color:"red"}}>*</span></label><br/>
                <input 
                    type = "text" 
                    id = "cvv" 
                    name = "info" 
                    value = {CVV}
                    onChange = {(e) => setCVV(e.target.value)}
                    required></input><br/><br/>
                    {CVVErr && <span style = {{color:"red"}}>Your CVV is invalid!<br/></span>}

                    <label for = "expDate">Expiry date<span style = {{color:"red"}}>*</span></label><br/>
                    <input 
                        type = "month" 
                        id = "expDate" 
                        name = "info" 
                       
                        required></input><br/><br/>
                        
                
                <button type = "submit" className = "btn bg-success" onClick = {() => submitHandler} >Reserve</button>
            <br/><br/>
                </form>


            <Link to = "/SelectRoom">
                <button type = "button" className = "btn bg-secondary">Cancel</button>
        </Link><br/><br/>


        </div>
    );
};

export default PersonalInformation;