import React, { useState } from 'react'
import Boton from '../Boton/Boton';


    const ItemCount = ({onAddToCart}) => {

    const [count, setCount] = useState(1);

    const sumar = () => {
        setCount(count + 1);
    }

    const restar = () => {
        if (count === 1) return
        setCount(count - 1);
    }

  return (
    <div>
        <div>
            <button onClick={ restar }>-</button>
            <span>{count}</span>
            <button onClick={ sumar }>+</button>
        </div>
        <div>
            <Boton onTouchButton={() => onAddToCart(count)}>
                Agregar al carrito
            </Boton>
        </div>
    </div>
  )
}

export default ItemCount;
