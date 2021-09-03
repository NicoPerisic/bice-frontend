import React from 'react'
import './styles/SelectorOn.css'

const SelectorOn = () => {
    return (
        <div>
        <div className='selectText'>
        <label>Planes disponibles</label>
        </div>
        <select className="selectorOn" id="selectInsurance" required>
          <option value='58'>Seguro Vida Activa</option>
          <option value='59'>Seguro Viaje Protegido</option>
        </select>
        </div>
    )
}


export default SelectorOn
