import React from 'react'
import {v4 as uuid} from 'uuid'

export default function Pizza(props) {
    const {details} = props
    return (
        <div id={`pizza-${uuid()}`}>
            <h2>Name: {details.name}</h2>
            <p>Size: {details.size}</p>
            <ul>Toppings:
                {
                details.toppings.map( topping => {
                    return (
                        <li>{topping}</li>
                    )
                })
                }
            </ul>
        </div>
    )
}
