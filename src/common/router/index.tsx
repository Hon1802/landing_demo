import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Images from '../../page/homePage';

// Đăng ký các plugin của GSAP
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Router: React.FC = () => {
  const location = useLocation();

  useGSAP(
    () => {
      ScrollSmoother.create({
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
      });
    },
    {
      dependencies: [location],
    }
  );

  return (
    <div id='smooth-wrapper'>
      <div id='smooth-content'>
        <Routes>
          <Route path='/' element={<Images />} />
        </Routes>
      </div>
    </div>
  );
};

export default Router;
