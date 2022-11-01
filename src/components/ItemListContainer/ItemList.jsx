import React from 'react'

function ItemList(props) {
    console.log(props)
  return (
    <div>
        <h1>Bienvenidos {props.greeting}</h1>
    </div>
  )
}

export default ItemList