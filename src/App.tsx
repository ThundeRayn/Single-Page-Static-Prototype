import './App.css';
import './index.css';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/sections/Hero';
import { useState } from 'react';

function App() {
  const [isLoaded,setIsLoaded] = useState(false);

  return (
    <>
    {!isLoaded && <LoadingScreen onComplete={()=>setIsLoaded(true)}/>}
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded? "opacity-100" : "opacity-0"}`}>
      <Hero/>
    </div>
    </>
  )
}

export default App
