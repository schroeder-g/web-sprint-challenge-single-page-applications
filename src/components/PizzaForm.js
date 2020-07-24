import React from 'react'

export default function PizzaForm() {
    return (
        <form className="pizzaForm" >
            <Label htmlfor="nameInput">Full Name:
                <input
                    type="text"
                    placeholder="Enter your name."
                    
                >
                </input>
            </Label>
        </form>
    )
}
