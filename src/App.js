import './App.css';
import { useEffect, useState } from 'react';
import RingLoader from "react-spinners/RingLoader";
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Contact from './components/Contact';
import Benefit from './components/Benefits';
import Features from './components/Features';
import Regiscoin from './components/Regiscoin';
import How from './components/How';
import Team from './components/Team';
import Personna from './components/Personna';
import Aos from 'aos';
import "aos/dist/aos.css";
// import AnimatedCursor from "react-animated-cursor"

function App() {
  const  [loading, setLoading] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000)
}, []);
  return (
    <div>
        {/* <AnimatedCursor
      innerSize={9}
      outerSize={15}
      color='102, 204, 123'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
      /> */}
    {
        loading ?

      <div className="loader">
        <RingLoader
        color={"#FF1700"} 
        loading={loading} 
        size={100} />
       </div>

        :
      <>
      <Navbar/>
      <Home/>
       <About/>
      <Features/>
      <Benefit/>
      <Regiscoin/>
      <How/>
      <Team/>
      {/* <Personna/> */}
      <Roadmap/>
      <Contact/> 
      </>

    }
    </div>
  );
}

export default App;
