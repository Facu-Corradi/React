import React from 'react'
import "./boton.css"

function Boton(props) {
  return (
    <button className="boton">
        {props.children}
    </button>
  )
}

export default Boton