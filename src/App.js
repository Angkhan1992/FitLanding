import './App.css';
import Footer from './components/footer/Footer';
import { Hero } from './components/hero/Hero';
import Join from './components/join/Join';
import { Plans } from './components/Plans/Plans';
import { Program } from './components/programs/Program';
import { Reasons } from './components/reasons/Reasons';
import { Testimonials } from './components/testimonials/Testimonials';

function App() {
  return (
    <div className="App">
        <Hero />
        <Program />
        <Reasons />
        <Plans />
        <Testimonials />
        <Join />
        <Footer />
    </div>
  );
}

export default App;
