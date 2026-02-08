import React from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/Hero";
import Programs from "./components/programs/Programs";
import Title from "./components/title/Title";
import About from "./components/about/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/testimonial/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";
import VedioPlayer from "./components/VedioPlayer/VedioPlayer";
import { useState } from "react";

const App = () => {

const [playState, setPlayState]=useState(false);
  return (
    <div>
  <Navbar/>
  <Hero/>
  <div className="container">
    <Title subtitle='Our Program' title='What We Offer'/>
    <Programs/>
    <About setPlayState={setPlayState}/>
    <Title subtitle='Gallery' title='Campus Photos'/>
    <Campus/>
    <Title subtitle='Testimonials' title='What Student Says'/>
    <Testimonials/>
    <Title subtitle='Contact Us' title='Get in Touch'/>
    <Contact/>
    <Footer/>
  </div>
  <VedioPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App