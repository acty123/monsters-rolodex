import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component';

export const CardList = props => (
    <div className="card-list">
        {props.usuarios.map(usuario =>(
            <Card key={usuario.id} usuario={usuario}/>
        ))}
    </div> 
);