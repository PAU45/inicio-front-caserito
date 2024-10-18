import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Buscar from './components/buscador';
import Slider from './components/slider';
import Acerca from './components/acerca';
import SliderWithCards from './components/SliderWithCards';
import SliderWithCards2 from './components/SliderWithCards2';
import Aplicacion from './components/aplicacion';
import SectionDivider from './components/SectionDivider';

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 flex flex-col justify-center">
        <div className="">
          <Buscar />
        </div>
        <SectionDivider />
        
        <div className="">
          <Slider />
        </div>
        <SectionDivider />
        
        <div className="">
          <SliderWithCards />
        </div>
        <SectionDivider />
        
        <div className="">
          <SliderWithCards2 />
        </div>
        <SectionDivider />

        <div className="flex flex-col justify-center items-center">
          <Acerca />
        </div>
        <SectionDivider />
        

        <div className="">
          <Aplicacion />
        </div>
        <SectionDivider />  
      </div>

      <Footer />
    </div>
  );
};

export default App;