// pages/index.js
'use client'
import First from './component/First';
import Fourth from './component/Fourth';
// import { useState } from 'react';

// import SentimentChart from './component/SentimentChart';
// import SentimentForm from './component/SentimentForm';
import Navbar from './component/Navbar';
import Second from './component/Second';
import Third from './component/Third';
const Home = () => {
  

  return (
    <main className="flex min-h-screen flex-col bg-[#040613] "> 

    <Navbar/>
    <div className= "container mt-20 mx-auto px-12 py-4">
   <First/>
   <Second/>
   <Third/>
   <Fourth/>
    </div>
    
    {/* <Footer/> */}
         </main>
  );
};

export default Home;
