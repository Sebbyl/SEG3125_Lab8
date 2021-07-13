import {Link} from 'react-router-dom'

const Rate = () =>{

    

    return(
        <div className = "container text-center">
            <p className = "border">Rate Your Stay</p>
            <p>Leave a comment!</p>
            <textarea rows = "4" cols = "50"></textarea><br/><br/>
            <Link to = "/">
                <button type = "button" className = "btn bg-success">Submit</button>
            </Link><br/><br/>
            <Link to = "/">
                <button type = "button" className = "btn bg-secondary">Main Page</button>
            </Link><br/><br/>
        </div>
    );
}

export default Rate;