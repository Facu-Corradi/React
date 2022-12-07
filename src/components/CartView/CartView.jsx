import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { createOrder, } from "../../Services/firestore";
import { useNavigate } from "react-router-dom";
import "./cartView.css";
import CartForm from "./CartForm";
import Boton from "../Boton/Boton";

function CartView() {
    const { cart, removeItem, priceInCart} = useContext(cartContext);
    let navigate = useNavigate();


    if (cart.length === 0)
        return (
            <div className="divVacio">
                <h1>Carrito Vacío</h1>
            </div>
    );

    async function handleCheckout(data) {
        const order = {
            buyer: data,
            items: cart,
            total: priceInCart(),
            date: new Date(),
    };

    const orderId = await createOrder(order);
    navigate(`/thankyou/${orderId}`);
    }

    return (
        <div className="cart-container">
        <div className="cart-itemsList">
            {cart.map((item) => (
                <div key={item.id} className="cart-item">
                <img src={item.imgurl} alt={item.title} />
                <h2>{item.title}</h2>
                <h4>${item.price * item.count}</h4>
                <h4>unidades: {item.count}</h4>
                <Boton onTouchButton={() => removeItem(item.id)}>
                    X
                </Boton>
                </div>
        ))}
        </div>
            <CartForm onSubmit={handleCheckout} />
        </div>
        );
}

export default CartView;