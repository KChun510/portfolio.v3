'use client'
import NavBar from './components/nav'
import SecondCont from './second_cont'
import FirstCont from './first_cont'
import React from "react";
import './Home.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

const Home = () => {
  return (

    <div className='Home'>
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <FirstCont />
        <br></br>
        <br></br>
        <SecondCont />
      </QueryClientProvider>
    </div>

  );
}

export default Home;
