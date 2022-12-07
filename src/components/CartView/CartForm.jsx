import { useState } from "react";
import "./CartForm.css"
import { Link } from "react-router-dom";

export default function CartForm(props) {
    const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
});

function onInputChange(evt) {
    let nameInput = evt.target.name;
    let value = evt.target.value;

    let newData = { ...data };
    newData[nameInput] = value;
    setData(newData);
}

function onSubmit(evt) {
    if (data.name.length === 0) return;

    evt.preventDefault();
    props.onSubmit(evt, data);
}

return (
    <form onSubmit={onSubmit}>
    <div className="divForm" >
        <label className="labelForm" htmlFor="name" >
            Nombre
        </label>
        <input
            required
            value={data.name}
            name="name"
            type="text"
            onChange={onInputChange}/>
    </div>

    <div className="divForm">
        <label htmlFor="email" className="labelForm">
            Email
        </label>
        <input
            required
            value={data.email}
            name="email"
            type="email"
            onChange={onInputChange}/>
    </div>

    <div className="divForm">
        <label htmlFor="phone" className="labelForm">
            Teléfono
        </label>
        <input
            required
            value={data.phone}
            name="phone"
            type="phone"
            onChange={onInputChange}/>
    </div>
        
        <Link to="/thankyou/:idOrder">
        <button
        disabled={data.name === "" || data.phone === "" || data.email === ""}
        type="submit">
        Finalizar Compra
        </button>
        </Link>

    </form>
);
}