import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Filters from './components/Filters';
import Restaurants from './components/Restaurants';
import UserInfo from "./data/UserInfo.json";
import offers from "./data/offers.json";
import restaurants from "./data/restaurants.json";


function App() {
  return (
    <div >
      <Navbar {...UserInfo.locations} />
      <Offers offers={offers}/>
      <section className="near-you">
      <Filters/>
      <Restaurants restaurants={restaurants}/>
      </section>
    </div>
  );
}

export default App;
