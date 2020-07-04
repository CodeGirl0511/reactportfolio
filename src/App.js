import React,{useState} from 'react';
import AboutMe from './AboutMe';

function App() {
  const [aboutme, setaboutme]= useState(['aboutme 1,aboutme 2'])
  return (
    <>
    <AboutMe aboutme={aboutme} />
    <input type="text"/>
</>



  )
};

export default App;
