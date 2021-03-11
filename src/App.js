import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Resume />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;