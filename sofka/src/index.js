import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Naves from './Naves';
import SVGComponent from './SVGComponent';
import NaveInput from './NaveInput';
import space_background from "./img/background.svg";
import {Nave} from './App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import './styles/index.css'

const saturnoV = new Nave('Saturno V','Queroseno+N(liq)','1967-1973','Vehículo Lanzadera', 'EE.UU');
const pelican = new Nave('Pelican','Fusion Nuclear','2524-2555','Baja orbita', 'UNSC');
const VeneraIV = new Nave('Venera IV','2. N_2O_4+UDMH','1967','Vehículo no tripulado', 'Rusia');
const Shenzou = new Nave('Shenzou','2. N_2O_4+MMH','1999-ACT','Vehículo tripulado', 'China');

function Index() {
  const [listaNaves, setListaNaves] = useState([])

  const [search, setSearch] = useState("")

  const nuevaNave = (nave) =>{
    setListaNaves([nave, ...listaNaves])//agrega al array en la primera posicion la nueva nave
  }

  return (
    <div className='flex flex-f-d-c flex-a-c'>
      <h1>Estación espacial sofka <FontAwesomeIcon icon={solid('hand-sparkles')} className="hand"/></h1>
      <img src={space_background} className="background" alt='background'/>
      <div className='flex'>
        <Naves nave={saturnoV.nombre} combustible={saturnoV.combustible} actividad={saturnoV.actividad} tipoDeNave={saturnoV.tipoDeNave} pais={saturnoV.pais}/>
        <Naves nave={pelican.nombre} combustible={pelican.combustible} actividad={pelican.actividad} tipoDeNave={pelican.tipoDeNave} pais={pelican.pais}/>
        <Naves nave={Shenzou.nombre} combustible={Shenzou.combustible} actividad={Shenzou.actividad} tipoDeNave={Shenzou.tipoDeNave} pais={Shenzou.pais}/>
        <Naves nave={VeneraIV.nombre} combustible={VeneraIV.combustible} actividad={VeneraIV.actividad} tipoDeNave={VeneraIV.tipoDeNave} pais={VeneraIV.pais}/>
      </div>
      <SVGComponent />
      <h1><FontAwesomeIcon icon={solid('gear')} />Creador de naves<FontAwesomeIcon icon={solid('rocket')} /></h1>
      <NaveInput nuevaNave={nuevaNave}/>
      <input type='text' placeholder='busqueda' value={search} name='busqueda' onChange={(e)=>setSearch(e.target.value.toLowerCase())}/>
      {
        console.log(search)
      }
      <div className='flex'>
        {
          listaNaves.filter(function(e){
            return e.Nave.toLowerCase().includes(search)
          }
          ).map(function(e){
            return <Naves nave={e.Nave} combustible={e.Combustible} actividad={e.Actividad} tipoDeNave={e.TipoDeNave} pais={e.Pais}/>
          })
        }
      </div>
      <footer className='footer'></footer>
    </div>
  );
}

ReactDOM.render(<Index/>,document.getElementById('root'));