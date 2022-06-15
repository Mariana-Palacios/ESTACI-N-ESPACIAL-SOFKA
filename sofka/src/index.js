import React from 'react';
import ReactDOM from 'react-dom';
import Naves from './Naves';
import SVGComponent from './SVGComponent';
import space_background from "./img/background.svg";
import {Nave} from './App'
import './styles/index.css'

const saturnoV = new Nave('Saturno V','Queroseno+N(liq)','1967-1973','Vehículo Lanzadera');


function Index() {
  return (
    <div className='flex flex-f-d-c flex-a-c'>
      <h1>Estación espacial <span>sofka</span></h1>
      <img src={space_background} className="background" alt='background'/>
      <div className='flex'>
        <Naves nave={saturnoV.nombre} combustible={saturnoV.combustible} actividad={saturnoV.actividad} tipoDeNave={saturnoV.tipoDeNave}/>
        <Naves nave={saturnoV.nombre} combustible={saturnoV.combustible} actividad={saturnoV.actividad} tipoDeNave={saturnoV.tipoDeNave}/>
        <Naves nave={saturnoV.nombre} combustible={saturnoV.combustible} actividad={saturnoV.actividad} tipoDeNave={saturnoV.tipoDeNave}/>
        <Naves nave={saturnoV.nombre} combustible={saturnoV.combustible} actividad={saturnoV.actividad} tipoDeNave={saturnoV.tipoDeNave}/>
      </div>
      <SVGComponent />
    </div>
  );
}

ReactDOM.render(<Index/>,document.getElementById('root'));