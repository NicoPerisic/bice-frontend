import React from 'react'
import './styles/Selector.css'

const Selector = (props) => {

    return (
        <div>
        <div className='selectText'>
        <label>Planes disponibles</label>
        </div>
        <select className="selector" id="selectInsurance" required onChange={(e) => { props.onChange(e.target.value) }}>
          <option hidden defaultValue="">Selecciona tu plan</option>
          <option value={58}>Seguro Vida Activa</option>
          <option value={59}>Seguro Viaje Protegido</option>
        </select>
        </div>
    )
}

export default Selector
