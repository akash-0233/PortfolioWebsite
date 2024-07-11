import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import ClientsReview from './components/ClientsReview';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <div>
      <Helmet>
        <title>Akash Rajput | Blockchain developer, Fullstact developer</title>
        <meta name="description" content="This is my portfolio website" />
        <meta name="keywords" content="portfolio, web developer, blockchain developer, React, JavaScript, projects, fullstact developer" />

      </Helmet>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <ClientsReview />
      <Contact />
    </div>
  );
}

export default App;
