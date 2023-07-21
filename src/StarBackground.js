import React from 'react';
import './StarBackground.css';

const StarBackground = () => {
  return (
    <div className="star-background">
    <div className='background'>
      {Array.from({ length: 100 }, (_, index) => {
        const x = Math.random();
        const y = Math.random();
        const movementClass = index % 2 === 0 ? 'star-movement-up' : 'star-movement-down';

        return (
          <div className={ `star ${movementClass}`} style={{ '--x': x, '--y': y }} key={index}></div>
        );
      })}
      {Array.from({ length: 50 }, (_, index) => {
        const x = Math.random();
        const y = Math.random();

        return (
          <div className="star-2" style={{ '--x': x, '--y': y }} key={index}></div>
        );
      })}
      </div>
    </div>
  );
};

export default StarBackground;

