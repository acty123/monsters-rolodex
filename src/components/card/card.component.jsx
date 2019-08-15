import React from 'react';
import './card.styles.css'

export const Card = props => (
    <div className="card-container">
        <img alt="usuario" src={`https://robohash.org/${props.usuario.id}?set=set5&size=180x180`}/>
        <h2>{props.usuario.name}</h2>
        <p>{props.usuario.email}</p>
    </div>
);