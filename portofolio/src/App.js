import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NavBar from './components/NavBar';
import Presentation from './components/Presentation';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <CarouselSlide /> */}
      <Presentation />
      <div className="content-diferent">
        <Projects />
      </div>
      <Skills />
      <div className="content-diferent">
        <Experience />
      </div>
    </div>
  );
}

export default App;
