import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const NaveMaker = (props) =>{
//   const {nave, combustible, actividad , tipoDeNave, pais} = props;  
  return(
    <div className='nave'>
      <h1 className='nave__title'>{props.Nave}</h1>
      <p className='nave__p'><FontAwesomeIcon icon={solid('gas-pump')} /> Combustible <br/> <span>{props.Combustible}</span> <span><FontAwesomeIcon icon={solid('pen-to-square')} /></span> <span><FontAwesomeIcon icon={solid('ban')} /></span></p>
      <p className='nave__p'><FontAwesomeIcon icon={solid('clock')} />Actividad <br/> <span>{props.Actividad}</span></p>
      <p className='nave__p'><FontAwesomeIcon icon={solid('rocket')} />Tipo de nave<br/> <span>{props.TipoDeNave}</span></p>
      <p className='nave__p'><FontAwesomeIcon icon={solid('flag')} />Pais<br/> <span>{props.Pais}</span></p>
    </div>
  )
}

export default NaveMaker;