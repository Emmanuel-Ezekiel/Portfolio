import './App.css';
import Navbar from "./components/navbar/index"
import Hero from "./pages/Hero/index"
import Porfolio from "./pages/Profolio/index"

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Porfolio/>
    </div>
  );
}

export default App;
