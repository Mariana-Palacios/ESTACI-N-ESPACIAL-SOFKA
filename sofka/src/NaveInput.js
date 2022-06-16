import React,{ useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

// const {nave, combustible, actividad , tipoDeNave, pais} = props; 

const NaveInput=(props)=>{
    const [input, setInput] = useState({
        Nave:'',
        Combustible:'',
        Actividad:'',
        TipoDeNave:'',
        Pais:'',
    })

    

    const [validacion, setValidacion] = useState('')

    const getFormulario = (e) =>{
        setInput(e.target.value) //se va obteniendo los parametros obtenidos en el input
        const value = e.target.value
        const name = e.target.name
        setInput((preValue)=>{
            if(name === 'Nave'){
                return{
                    Nave: value,
                    Combustible: input.Combustible,
                    Actividad: input.Actividad,
                    TipoDeNave: input.TipoDeNave,
                    Pais: input.Pais,
                }
            }else if(name === 'Combustible'){
                return{
                    Nave: input.Nave,
                    Combustible: value,
                    Actividad: input.Actividad,
                    TipoDeNave: input.TipoDeNave,
                    Pais: input.Pais,
                }
            }else if(name === 'Actividad'){
                return{
                    Nave: input.Nave,
                    Combustible: input.Combustible,
                    Actividad: value,
                    TipoDeNave: input.TipoDeNave,
                    Pais: input.Pais,
                }
            }else if(name === 'TipoDeNave'){
                return{
                    Nave: input.Nave,
                    Combustible: input.Combustible,
                    Actividad: input.Actividad,
                    TipoDeNave:  value,
                    Pais: input.Pais,
                }
            }else{
                return{
                    Nave: input.Nave,
                    Combustible: input.Combustible,
                    Actividad: input.Actividad,
                    TipoDeNave: input.TipoDeNave,
                    Pais: value,
                }
            }
        })
    }

    const submit = (e) =>{
        e.preventDefault(); //se va obteniendo los parametros obtenidos en el input
        // if(input.Nave.trim() !== "" && input.Combustible.trim() !== "" && input.Actividad.trim() !== "" && input.TipoDeNave.trim() !== "" && input.Pais.trim() !== ""){
        console.log(input.Nave)
        console.log(input.Combustible)
        console.log(input.Actividad)
        if(input.Nave.length !== 0 && input.Combustible.length !== 0 &&  input.Actividad !== 0 ){    
            props.nuevaNave(input)
            console.log(input)
            setInput({
                Nave:'',
                Combustible:'',
                Actividad:'',
                TipoDeNave:'',
                Pais:'',
            })
            setValidacion(true)
        }else{
            setValidacion(false)
        }
    }

    return(
        <div>
            <form className='NaveMaker' onSubmit={submit}>
                <input type='text' placeholder='Nave' value={input.Nave} name='Nave' className='NaveMaker__input' onChange={getFormulario}/>
                <input type='text' placeholder='Nave' value={input.Combustible} name='Combustible' className='NaveMaker__input' onChange={getFormulario}/>
                <input type='text' placeholder='Nave' value={input.Actividad} name='Actividad' className='NaveMaker__input' onChange={getFormulario}/>
                <input type='text' placeholder='Nave' value={input.TipoDeNave} name='TipoDeNave' className='NaveMaker__input' onChange={getFormulario}/>
                <input type='text' placeholder='Nave' value={input.Pais} name='Pais' className='NaveMaker__input' onChange={getFormulario}/>
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