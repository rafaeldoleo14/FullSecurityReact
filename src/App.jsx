
import React from "react"
import { Navbar } from "./components/NavBar/Navbar";
import {SobreNosotros} from "./components/SobreNosotros/SobreNosotros";
import {MVV} from "./components/MVV/MVV";

import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

function App() {

  return (
    <>

      <Navbar/>
      <SobreNosotros/>
      <MVV/>
      
    </>
  )
}

export default App
