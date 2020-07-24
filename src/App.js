import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import * as yup from 'yup'

import formSchema from './validation/FormSchema'
import Home from './components/Home'
import PizzaForm from './components/PizzaForm'
import Orders from './components/Orders'

const initialValues = {
  name: '',
  size: '',
  toppings: {
    Pepperoni: false,
    Sausage: false,
    Onion: false,
    Mushrooms: false, 
  },
  instructions: '', 
}

const initErrors = {
  Name: '',
  Size: ''
}

const initOrders = []

const App = () => {
//set State
const [formValues, setFormValues] = useState(initialValues)
const [formErrors, setFormErrors] = useState(initErrors)
const [orders, setOrders] = useState(initOrders)
const [disabled, setDisabled] = useState(true)

//formActions
const inputChange = (name, value) => {
  yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: "",
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      })
    })

  setFormValues({
    ...formValues,
    [name]: value // NOT AN ARRAY
  })
}

const checkboxChange = (name, isChecked) => {
  setFormValues({
    ...formValues,
    toppings: {
      ...formValues.toppings, 
      [name]: isChecked
    }
  })
}

const postSubmit = newOrder => {
  setOrders([...orders, newOrder])
  setFormValues(initialValues)
}

const submit = (values) => {
  const newOrder = {
    name: formValues.name.trim(),
    size: formValues.size,
    toppings: Object.keys(formValues.toppings).filter(top => formValues.toppings[top])
  }
  console.log(newOrder)
  postSubmit(newOrder)
}

useEffect(() => {
  formSchema.isValid(formValues).then(valid => {
    setDisabled(!valid)
  })
}, [formValues])

  return (
    <div className='App'>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/pizza">Order Now</Link>
          <Link id="ordersBtn" to="/orders">Orders</Link>
        </nav>
        <h1>Lambda Eats 🍕</h1>
        <p>Makin' Pizza that's Exponentially Delicious</p>

        <Switch>
          <Route path="/pizza">
            <PizzaForm values={formValues} 
              checkboxChange={checkboxChange} 
              inputChange={inputChange} 
              submit={submit}
              disabled={disabled}/>
          </Route>
          <Route path="/orders">
            <Orders orders={orders}/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
