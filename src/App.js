// import './App.css';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Skills from './components/Skills/Skills';
import YouTube from './components/YouTube/YouTube';



const App = () => {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Contact />
      <Home />
      <Skills />
      <YouTube />
    </div>
  );
}

export default App;
