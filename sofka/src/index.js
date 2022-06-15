import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SVGComponent from './SVGComponent';
// import './index.css';


const Index = () =>{
  return(
    <div>    
      <App nave="nave"/>
      <SVGComponent/>
    </div>
  )
}

ReactDOM.render(<Index/>,document.getElementById('root'));