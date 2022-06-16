import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const Naves = (props) =>{
  const {nave, combustible, actividad , tipoDeNave, pais} = props; 
  return(
    <div className='nave'>
      <h1 className='nave__title'>{nave}</h1>
      <p className='nave__p'><FontAwesomeIcon icon={solid('gas-pump')} /> Combustible <br/> <span>{combustible}</span></p>
      <p className='nave__p'><FontAwesomeIcon icon={solid('clock')} />Actividad <br/> <span>{actividad}</span></p>
      <p className='nave__p'><FontAwesomeIcon icon={solid('rocket')} />Tipo de nave<br/> <span>{tipoDeNave}</span></p>
      <p className='nave__p'><FontAwesomeIcon icon={solid('flag')} />Pais<br/> <span>{pais}</span></p>
    </div>
  )
}

export default Naves;
