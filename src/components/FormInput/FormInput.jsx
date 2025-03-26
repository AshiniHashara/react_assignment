import React from 'react'
import "./FormInput.css"

const FormInput = (props) => {
  return (
    <>
    <label>{props.name}</label>
    <div className="input-field">
        <input type="text" value={props.value} readOnly />
    </div>
    </>
  )
}

export default FormInput