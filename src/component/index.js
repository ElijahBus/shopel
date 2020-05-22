import  React from "react";

import MainHome from "./sub/MainHome"
import Navbar from './sub/partial/Navbar';
import Footer from './sub/partial/Footer';


function Home() {
  return (
    <div>
      <Navbar />
      <MainHome />
      <Footer />
    </div>
  )
}

export default Home;