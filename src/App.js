import './App.css';
import Nav from "./Nav";
import Banner from "./Banner";
import Projects from "./Projects";
import About from "./About"
import Technologies from './Technologies';
import Footer from './Footer';


function App() {

  window.scrollTo({top: 0, left: 0, behavior: 'smooth' });

  return (
    <div className="app">
      <Nav />
      <Banner />
      <Projects />
      <About />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
