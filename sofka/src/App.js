import React from 'react';
import './App.css';

const App = (props) =>{
  const {nave, combustible, agenteOxidante, actividad} = props;
  return(
    <div>
      <h1>{nave}</h1>
      <p>Combustible = {combustible}</p>
      <p>Agente Oxidante = {agenteOxidante}</p>
      <p>Actividad = {actividad}</p>
    </div>
  )
}

export default App;
