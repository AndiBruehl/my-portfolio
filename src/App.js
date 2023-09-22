

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Downloads from './components/Downloads/Downloads';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import YouTube from './components/YouTube/YouTube';



const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <YouTube />
      <Downloads />
      <Contact />
    </div>
  );
}

export default App;
