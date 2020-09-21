import React from "react";
import { Link } from "react-router-dom";

import Api from "../../services/api";

import "./styles.css";

function AdventureItem({ name, date, id }) {

    const handleDelete = async (event) => {
        event.preventDefault();
        try {
            await Api.delete(`/adventure/${id}`);
        } catch (error) {
            alert("algum erro ocorreu");
        }
    };
    return (
        <li>
            <div className="adventure-item">
                <h4>{name}</h4>
                <p>Registrada na data {date}</p>
                <Link to={`/Adventure/${id}`} className="acess-adventure">
                    <span>Acessar</span>
                </Link>
                <button onClick={handleDelete} className="delete">
                    <span>deletar</span>
                </button>
                <Link to={`/edit/${id}`} className="put-adventure">
                    <span>editar</span>
                </Link>
            </div>
        </li>
    );
}

export default AdventureItem;
