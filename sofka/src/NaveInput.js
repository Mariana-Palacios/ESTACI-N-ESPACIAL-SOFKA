import React,{ useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


const NaveInput=(props)=>{
    const [input, setInput] = useState('')
    const [validacion, setValidacion] = useState('')

    const getFormulario = (e) =>{
        setInput(e.target.value) //se va obteniendo los parametros obtenidos en el input
    }

    const submit = (e) =>{
        e.preventDefault(); //se va obteniendo los parametros obtenidos en el input
        if(input.trim() !== "" ){
            props.nuevaNave(input)
            setInput("")
            setValidacion(true)
        }else{
            setValidacion(false)
        }
    }

    return(
        <div>
            <form className='NaveMaker' onSubmit={submit}>
                <input type='text' placeholder='Nave' value={input} name='text' className='NaveMaker__input' onChange={getFormulario}/>
                <button className=''><FontAwesomeIcon icon={solid('circle-check')} /></button>
            </form>
            {
                !validacion &&
                <div className='validacion'>Añada una nave</div>
            }
        </div>
    )
}

export default NaveInput;