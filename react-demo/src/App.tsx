import React, { useEffect, useReducer, useState, createContext, useLayoutEffect, useContext } from 'react';
import logo from './logo.svg';
import './App.css';

const numberState = {
  number: 0
}

enum NumberActionKind {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE'
}

interface NumberAction {
  type: NumberActionKind;
}

function numberReducer(state: typeof numberState, action: NumberAction): typeof numberState {
  switch (action.type) {
    case NumberActionKind.INCREASE:
      return {...state, number: state.number + 1 }
    case NumberActionKind.DECREASE:
      return {...state, number: state.number - 1}
    default:
      throw new Error()
  }
}

interface FormContextData {
  name: string,
  number: number
}

const FormContext = createContext<FormContextData>({
  name: "N/A",
  number: 0
})

function FormComponent() {

  const [name, setName] = useState("N/A");
  const [state, dispatch] = useReducer(numberReducer, numberState);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("Please edit the fields to the left to get started!");
  }, []);

  useLayoutEffect(() => {
    setMessage(`Hi ${name}! Your number is #${state.number}.`)
  }, [name, state.number]);

  return (
    <main>
      <div className="d-flex flex-row p-4">
        <div className='col-8'>
          <div className='col-12'>
            <label className="col-3" htmlFor="name">Name</label>
            <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
          </div>
          <div className='col-12'>
            <label className="col-3" htmlFor="name">Number</label>
            <button className="btn btn-primary" onClick={() => dispatch({ type: NumberActionKind.DECREASE})}>-</button>
            <input type='number' disabled value={state.number}></input>
            <button className="btn btn-primary" onClick={() => dispatch({ type: NumberActionKind.INCREASE})}>+</button>
          </div>
        </div>
        <div className='col-4 border'>{message}</div>
      </div>
      <FormContext.Provider value={{name, number: state.number}}>
        <DisplayComponent />
      </FormContext.Provider>
    </main>
  )
}

function DisplayComponent() {

  const state = useContext(FormContext);
  const [triviaMessage, setTriviaMessage] = useState("");

  useEffect(() => {
    // Handle API call to http://numbersapi.com.
    fetch(`http://numbersapi.com/${state.number}`)
    .then(async response => {
      setTriviaMessage(await response.text())
    })
    .catch(err => {
      console.log(err);
    })

  }, [state.number])

  return (
    <div className='border p-4 m-4'>
      <h1>Name: {state.name}</h1>
      <h2>Number: {state.number}</h2>
      <h4>Trivia: {triviaMessage}</h4>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <FormComponent />
    </div>
  );
}

export default App;
