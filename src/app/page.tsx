'use client'
import React from "react";
import dynamic from 'next/dynamic';
import { QueryClient, QueryClientProvider } from 'react-query';
import NavBar from './components/nav'
import './Home.css';
import AboutMeCont from './aboutMe_cont'
import FirstCont from './first_cont'
import HeroCont from './hero_cont';
import Image from 'next/image';
const MusicCont = dynamic(() => import('./music_cont'), { ssr: false });

const queryClient = new QueryClient()

const Home = () => {
  return (
    <div className="Home flex flex-col relative overflow-hidden">
      {/* 
      <Image
        src="/better_better_dark_city.png"
        alt="City Background"
        fill
        className="z-[-1]"
        style={{
          objectFit: 'cover',         // Equivalent to background-size: cover
          objectPosition: '50% 20%',  // Equivalent to background-position: 50% 20%
          imageRendering: 'pixelated',
          textAlign: 'center',        // Not really meaningful on <img>, but included per request
          padding: 0,
          margin: 0
        }}
        priority
      />
      */}
      <QueryClientProvider client={queryClient}>
        <NavBar />

        {/* Hero Section */}
        <div className="pb-24 md:min-h-screen md:py-0">
          <HeroCont />
        </div>

        {/* FirstCont Section */}
        <div className="py-24 md:min-h-screen md:py-0">
          <FirstCont id="first_cont" />
        </div>

        {/* MusicCont Section */}
        <div className="py-24 md:min-h-screen md:py-0">
          <MusicCont id="music_cont" />
        </div>

        {/* AboutMeCont Section */}
        <div className="py-24 md:min-h-screen md:py-0">
          <AboutMeCont id="aboutMe_cont" />
        </div>

      </QueryClientProvider>
    </div>

  );
}

export default Home;



