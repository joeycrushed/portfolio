import './App.css';

import Banner from "./Banner";
import Projects from "./Projects";
import About from "./About"
import Technologies from './Technologies';

function App() {

  window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  
  return (
    <div className="app">
      <Banner />
      <Projects />
      <About />
      <Technologies />
    </div>
  );
}

export default App;
