import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SVGComponent from './SVGComponent';
import space_background from "./img/background.svg";
import './styles/index.css'
// import './index.css';


function Index() {
  return (
    <div className='flex flex-f-d-c flex-a-c'>
      <h1>Estación espacial <span>sofka</span></h1>
      <img src={space_background} className="background" alt='background'/>
      <App nave="nave" />
      <SVGComponent />
    </div>
  );
}

ReactDOM.render(<Index/>,document.getElementById('root'));