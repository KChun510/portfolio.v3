import './aboutMe_cont.css'
import React, { useState } from 'react'
import { useCallback } from 'react'
import Info from './components/info'
import Creds from './components/creds'
import Resume from './components/resume'

const AboutMeCont = ({ id }) => {
    const [activeTab, setActiveTab] = useState('info'); // Set the initial activeTab state to 'home'
    const handleTabClick = useCallback((tab) => {
        setActiveTab(tab);
    }, [setActiveTab]);
    return (
        <div id={id}>
            {/* Title Row */}
            <div className='row'>
                <div className='text-4xl font-bold text-white justify-center'>About me</div>
            </div>

            {/* Tabs */}
            <div className="flex flex-row space-x-3 md:space-x-20 m-10 md:m-10 justify-center">
                <button
                    className={`aboutMe_button flex-items ${activeTab === 'creds' ? 'activeButton' : ''}`}
                    onClick={() => handleTabClick('creds')}
                >
                    <h5>Credentials</h5>
                </button>
                <button
                    className={`aboutMe_button flex-items ${activeTab === 'info' ? 'activeButton' : ''}`}
                    onClick={() => handleTabClick('info')}
                >
                    <h5>Information</h5>
                </button>
                <button
                    className={`aboutMe_button flex-items ${activeTab === 'resume' ? 'activeButton' : ''}`}
                    onClick={() => handleTabClick('resume')}
                >
                    <h5>Resume</h5>
                </button>
            </div>

            {/* Content */}
            <div className="flex justify-center w-full">
                <div className={`display ${activeTab === 'info' ? 'block' : 'hidden'} p-4`}>
                    <Info />
                </div>
                <div
                    className={`display ${activeTab === 'creds' ? 'block' : 'hidden'} p-4`}
                >
                    <Creds />
                </div>
                <div
                    className={`display ${activeTab === 'resume' ? 'block' : 'hidden'} p-4`}
                >
                    <Resume />
                </div>
            </div>
        </div>
    );
};

export default AboutMeCont;



