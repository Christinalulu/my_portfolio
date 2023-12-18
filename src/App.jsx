import Loader from "./components/loader/Loader";
import NavHeader from "./components/nav-header/NavHeader";
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function App() {
    useEffect(() => {
        const appTimeline = gsap.timeline();
    
        // Get the loader element
        const loader = document.querySelector('.loader');
    
        // Fade out the loader and add any additional animations
        appTimeline.to(loader, { opacity: 0, duration: 5, ease: 'power2.inOut' });
    
        // Optionally, you can add additional animations or logic here

    
      }, []);

	return (
    <>
    <Loader/>
    <NavHeader/>
   
    </>
		
	);
}

export default App;
