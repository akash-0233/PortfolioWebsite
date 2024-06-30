import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import ClientsReview from './components/ClientsReview';
import ProjectTree from './components/tree';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <ProjectTree/> */}
      <About />
      <Projects />
      <ClientsReview/>
      <Contact />
    </div>
  );
}

export default App;
