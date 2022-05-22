import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Filters from './components/Filters';
import Restaurants from './components/Restaurants';

function App() {
  return (
    <div >
      <Navbar />
      <Offers/>
      <section class="near-you">
      <Filters/>
      <Restaurants/>
      </section>
    </div>
  );
}

export default App;
