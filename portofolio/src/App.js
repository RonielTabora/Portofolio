import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NavBar from './components/NavBar';
import Presentation from './components/Presentation';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { Fade, Slide } from 'react-reveal';
import Media from './components/Media';
import Education from './components/Education';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Fade left>
        <Presentation />
      </Fade>
      <Slide bottom>
        <div className="content-diferent">
          <Projects />
        </div>
      </Slide>
      <Fade left>
        <Skills />
      </Fade>
      <Fade top>
        <div className="content-diferent">
          <Experience />
        </div>
      </Fade>
      <div>
      <h1 className="pt-2 teme-color">Formación Academica</h1>
      <Education/>
      </div>
      <Media />
      <Footer />
    </div>
  );
}

export default App;
