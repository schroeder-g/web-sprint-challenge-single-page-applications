import React from 'react'
import Pizza from './Pizza'

export default function Orders({orders}) {
    return (
        <div id="orders">
            <h2>Orders</h2>
            {
                orders.map( pizza => {
                    return(
                        <Pizza details={pizza}/>
                    )
                })
            }
        </div>
    )
}
