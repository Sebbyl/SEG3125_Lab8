import {Link} from 'react-router-dom'
import { useHistory } from 'react-router';

const Rate = () =>{
    const history = useHistory()

    const handleSubmit = (event) =>{
        event.preventDefault()
        history.push('/')
    }
    

    return(
        <div className = "container text-center">
            <p className = "border">Rate Your Stay</p>
            <form onSubmit = {handleSubmit}>
            <label for = "rating">Rating<span style = {{color:"red"}}>*</span></label><br/>
                    <select 
                        type = "text" 
                        id = "rating" 
                        name = "find" 
                        style = {{width:'auto'}}
                        
                        required>
                        <option></option>
                        <option>1 Star</option>
                        <option>2 Stars</option>
                        <option>3 Stars</option>
                        <option>4 Stars</option>
                        <option>5 Stars</option>
                    </select><br/><br/>
            <p>Leave a comment!</p>
            <textarea rows = "4" cols = "50"></textarea><br/><br/>
           
            <button type = "submit" className = "btn bg-success" onClick = {() => handleSubmit}>Submit</button>
            <br/><br/>
            <Link to = "/">
                <button type = "button" className = "btn bg-secondary">Main Page</button>
            </Link><br/><br/>
            </form>
        </div>
    );
}

export default Rate;