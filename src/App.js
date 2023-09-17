import React  from 'react';
import './App.css';
import Billboard from './components/Billboard ';
import Header from './components/Header';
import  MiddleImage from './components/MiddleImage';
import TopSection from './components/TopSection';
import QuickLinks from './components/QuickLinks';
let App = ()=> {
  return (
    <div>
       <Billboard/>
       <MiddleImage/>
       <Header/>
       <TopSection/>
       <QuickLinks/>
    </div>
  
  );
}
 
export default App;

