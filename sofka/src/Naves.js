import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const Naves = (props) =>{
  const {nave, combustible, actividad , tipoDeNave, pais} = props; 
  return(
    <div className='nave'>
      <h1 className='nave__title'>{nave}</h1>
      <p className='nave__p'><FontAwesomeIcon icon={solid('gas-pump')} className='color-dark-blue'/> Combustible <br/> <span className='color-dark-blue'>{combustible}</span></p>
      <p className='nave__p'><FontAwesomeIcon icon={solid('clock')} className='color-blue'/>Actividad <br/> <span className='color-blue'>{actividad}</span></p>
      <p className='nave__p'><FontAwesomeIcon icon={solid('rocket')} className='color-pink'/>Tipo de nave<br/> <span className='color-pink'>{tipoDeNave}</span></p>
      <p className='nave__p'><FontAwesomeIcon icon={solid('flag')} className='color-purple'/>Pais<br/> <span className='color-purple'>{pais}</span></p>
    </div>
  )
}

export default Naves;
