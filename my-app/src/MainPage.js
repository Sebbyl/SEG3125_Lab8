import Beach_view from './images/Beach_view.jpg'
import Hotel_view from './images/Hotel_view.jpg'
import {Link} from 'react-router-dom'

const MainPage = () =>{
    return(
        <div >
        <table className = "container">
        <tr>
          <td><img src = {Beach_view} style = {{
            width: "640px",
            height: "400px",
    
          }}/></td>
          <td><img src = {Hotel_view} style = {{
            width: "640px",
            height: "400px",
    
          }}/></td>
        </tr>
      </table>

        <div className = "container text-center py-3">
        <Link to = "/findHotel">
        <button type = "button" className = "btn bg-success btn-lg mx-3">Find a Place to Stay</button>
        </Link>

        <Link to = "/ViewReservation">
        <button type = "button" className = "btn bg-success btn-lg mx-3">View my Reservations</button>
        </Link>
        
        </div>
        </div>
        
    );
}

export default MainPage