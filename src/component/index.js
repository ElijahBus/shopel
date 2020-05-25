import  React from "react";

import MainHome from "./sub/MainHome"
import Navbar from './sub/partial/Navbar';
import Footer from './sub/partial/Footer';
import SearchShop from "./sub/partial/SearchShop";

function Home() {
  return (
    <div>
      <Navbar />
      <MainHome />
      <Footer />
      <SearchShop />
    </div>
  )
}

export default Home;