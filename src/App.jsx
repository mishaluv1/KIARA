import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Collection />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;