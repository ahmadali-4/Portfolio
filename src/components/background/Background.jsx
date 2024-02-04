import React from 'react';
import './background.scss';
import { Icons } from './Icons';

const Background = () => {

  // const iconsArray = Array.from({ length: 20 }, (_, index) => <Icons key={index} />);
  return (
    <div className="background-container">
         {/* <div className="background-wrapper">
{iconsArray}
         
         
         
         


         </div> */}
          <Icons/>
         <Icons/>
         <Icons/>
         <Icons/>
         <Icons/>
         <Icons/>
         <Icons/>
         <Icons/>
         <Icons/>
         <Icons/>
         <Icons/>
         <Icons/>
         <Icons/>
         <Icons/>
         <Icons/>
         <Icons/>
         <Icons/>
         <Icons/>
         <Icons/>
         <Icons/>

    </div>
  );
};

export default Background;
