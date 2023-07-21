import React from 'react';
import Header from './Header';
import './App.css';
import StarBackground from './StarBackground';


function App() {

  return (
    <div className='background-geral'>
      <StarBackground/><Header/> {/* Use o componente menu dentro do JSX */ }
    
    </div>
  );
}


export default App;
