import './App.css';
import Navbar from "./components/navbar/index";
import Hero from "./pages/Hero/index";
import Porfolio from "./pages/Profolio/index";
import About from "./pages/About/index";
import Footer from "./components/footer/index"

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Porfolio/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
