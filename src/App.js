import './App.css';
import About from './components/About';
import ContactPage from './components/ContactPage';
import Events from './components/Events';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Team from './components/Team';
import Homepage from './Homepage';

function App() {
  return (
    <>
       <Navbar/>
       <Homepage/>
       <About/>
       <Events/>
       <Team/>
       <Gallery/>
       <Newsletter/>
       <ContactPage/>
       <Footer/>
    </>
  );
}

export default App;
