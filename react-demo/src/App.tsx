import React, { useReducer, useState } from 'react';
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

function FormComponent() {

  const [name, setName] = useState("N/A");
  const [state, dispatch] = useReducer(numberReducer, numberState);

  return (
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
      <div className='col-4 border'></div>
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
