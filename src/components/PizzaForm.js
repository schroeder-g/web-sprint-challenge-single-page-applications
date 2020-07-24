import React from 'react'

export default function PizzaForm(props) {
    const {inputChange, values, submit, checkboxChange, disabled } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

    const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        checkboxChange(name, checked)
      }

    const onChange = (evt) => {
        const name = evt.target.name
        const value = evt.target.value
        inputChange(name, value)
    }
    return (
        <form className="pizzaForm" >
            <label htmlFor="name">Full Name: 
                <input
                    onChange={onChange}
                    type="text"
                    name="name"
                    placeholder="Enter your name."
                >
                </input>
            </label>
            <label htmlFor="size"> Size: 
                <select
                    value={values.size}
                    name="size"
                    onChange={onChange}
                >
                    <option value="">Pick a size</option>
                    <option value="s">Small</option>
                    <option value="m">Medium</option>
                    <option value="l">Large</option>
                    <option value="xl">Extra large</option>
                </select>
            </label>
            <div className="toppings">Toppings: 
                <label>Pepperoni
                    <input
                      type="checkbox"
                      name="pepperoni"
                      onChange={onCheckboxChange}
                    />
                </label>
                <label>Sausage
                    <input
                      type="checkbox"
                      name="sausage"
                      onChange={onCheckboxChange}
                    />
                </label>
                <label>Mushrooms
                    <input
                      type="checkbox"
                      name="mushrooms"
                      onChange={onCheckboxChange}
                    />
                </label>
                <label>Onions
                    <input
                      type="checkbox"
                      name="onions"
                      onChange={onCheckboxChange}
                    />
                </label>
            </div>
            <label htmlFor="instructions">Special instructions:  
                <input
                    type="text"
                    name="instructions"
                    onChange={onChange}
                    placeholder="Enter special instructions."
                >
                </input>
            </label>
            <button id="submitBtn" onClick={onSubmit} disabled={disabled}> Submit </button>
        </form>
    )
}
