'use client'
import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query';
import NavBar from './components/nav'
import './Home.css';
import AboutMeCont from './aboutMe_cont'
import FirstCont from './first_cont'
import HeroCont from './hero_cont';
import MusicCont from './music_cont';

const queryClient = new QueryClient()

const Home = () => {
  return (
    <div className="Home flex flex-col">
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <div className="min-h-screen flex flex-col justify-between">
          <HeroCont />
        </div>
        <div className="min-h-screen">
          <FirstCont id="first_cont" />
        </div>

        <div className="min-h-screen">
          <MusicCont id="music_cont" />
        </div>

        <div className="min-h-screen">
          <AboutMeCont id="aboutMe_cont" />
        </div>
      </QueryClientProvider>
    </div>
  );
}

export default Home;
