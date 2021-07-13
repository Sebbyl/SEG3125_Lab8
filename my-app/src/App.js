import Navbar from './Navbar';
import MainPage from './MainPage';
import FindHotel from './FindHotel';
import SelectHotel from './SelectHotel';
import SelectRoom from './SelectRoom';
import PersonalInformation from './PersonalInformation';
import ViewReservation from './ViewReservation';
import Rate from './Rate';
import MainPageFR from './MainPageFR'
import ReservationConfirmation from './ReservationConfirmation'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div>
        <Switch>
          <Route exact path = "/">
            <MainPage/>
          </Route>
          <Route exact path = "/FR">
            <MainPageFR/>
          </Route>
          <Route exact path = "/findHotel">
              <FindHotel/>
          </Route>
          <Route exact path = "/SelectHotel">
              <SelectHotel/>
          </Route>
          <Route exact path = "/SelectRoom">
              <SelectRoom/>
          </Route>
          <Route exact path = "/PersonalInformation">
              <PersonalInformation/>
          </Route>
          <Route exact path = "/ViewReservation">
              <ViewReservation/>
          </Route>
          <Route exact path = "/Rate">
              <Rate/>
          </Route>
          <Route exact path = "/ReservationConfirmation">
              <ReservationConfirmation/>
          </Route>
        </Switch>
        
      </div>
      <footer className = "border-top py-2"style = {{
        fontSize: "10px",
        textAlign: "center",
      }}>
      <span><u>Do no hesitate to contact us if you require help / N'hésitez pas de nous contacter si vous avez besoin d'aide</u></span><br/>
          <span>Email / Courriel: PremiumHotels@outlook.com</span><br/>
          <span>Phone Number / Numéro de téléphone: (613) 587-2134</span>
          
      </footer>
    </div>
    </Router>
    
  );
}

export default App;
