import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Services from './sections/Services/Services';
import Team from './sections/Team/Team';
import Contact from './sections/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
