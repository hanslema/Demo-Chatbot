//import logo from './logo.svg';
import './App.css';
import  NavBar  from './NavBar';
import React from 'react';

const App = () => {
  return (
    <div className="App">
      <div className='bg-primary w-full overflow-hidden'>
        <div className={`sm:px-16 px-6 flex justify-center items-center`}>
          <div className={`xl:max-w-[1280px] w-full`}>
            <NavBar />
            <home />
            <faq />
            <settings />
          </div>
        </div>
      </div>
      
    </div>
    


  );
}

export default App;
