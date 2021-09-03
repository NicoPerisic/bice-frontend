import React from 'react'
import './styles/SelectorOff.css'

const SelectorOff = () => {
    return (
        <div>
        <div className='selectText'>
        <label>Planes disponibles</label>
        </div>
        <select className="selector" id="selectInsurance" required>
          <option hidden selected>Selecciona tu plan</option>
          <option value='58'>Seguro Vida Activa</option>
          <option value='59'>Seguro Viaje Protegido</option>
        </select>
        </div>
    )
}

export default SelectorOff
