'use client'
import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query';
import NavBar from './components/nav'
import './Home.css';
import SecondCont from './second_cont'
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
        <FirstCont id="first_cont" />
        <br />
        <SecondCont id="second_cont" />
        <br />
        <MusicCont id="music_cont" />
      </QueryClientProvider>
    </div>
  );
}

export default Home;
