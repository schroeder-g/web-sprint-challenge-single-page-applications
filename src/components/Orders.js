import React from 'react'
import Pizza from './Pizza'

export default function Orders({orders}) {
    return (
        <div id="orders">
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
