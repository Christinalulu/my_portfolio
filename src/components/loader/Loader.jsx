import '../../components/loader/loader.css'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';


const Loader = () => {

  useEffect(() => {

    const preLoaderTimeline = gsap.timeline();

    // Get all the spans inside the loader_item
    const spans = document.querySelectorAll('.loader_item span');

    // Set initial visibility to hidden
    gsap.set(spans, { opacity: 0, y: 20, x: 0 });

    // Animation to make each letter appear, go up, and out one at a time
    preLoaderTimeline.staggerTo(spans, 0.2, { opacity: 1, y: 0, x: 0, ease: 'power4.out' }, 0.1);

    // Add a delay before the second animation starts
    preLoaderTimeline.addLabel('fadeOutStart', '+=1');

    // Animation to move all spans up and fade out
    preLoaderTimeline.to(spans, 0.3, { opacity: 0, y: -20, ease: 'power4.inOut' }, 'fadeOutStart');

    // Optionally, you can add additional animations or logic here




    // const preLoaderTimeline = gsap.timeline();

    // Get all the spans inside the loader_item
    // const spans = document.querySelectorAll('.loader_item span');

    // Set initial visibility to hidden
    // gsap.set(spans, { opacity: 0 });

//     // Animation to make each letter appear one at a time
    // preLoaderTimeline.staggerTo(spans, 0.5, { opacity: 1 }, 0.3);

// gsap.set(spans, { opacity: 0, y: 20, x: 0 });
// 
// // // Animation to make each letter appear, go up, and out one at a time
// preLoaderTimeline.staggerTo(spans, 0.5, { opacity: 1, y: 0, x: 0, ease: 'power5.out' }, 0.3);


    // Optionally, you can add additional animations or logic here

  }, []);

  return (
    <div className="loader ">
      <div className="loader_item  sm:flex-row">
      <span>H</span>
      <span>i</span>
      <div></div>
      <span>W</span>
      <span>e</span>
      <span>l</span>
      <span>c</span>
      <span>o</span>
      <span>m</span>
      <span>e</span>

      </div>
     
    </div>


  )
}

export default Loader;


