import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function FormComponent() {

  const [name, setName] = useState("N/A");

  return (
    <div className="d-flex flex-row p-4">
      <div className='col-8'>
        <div className='col-12'>
          <label className="col-3" htmlFor="name">Name</label>
          <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
        </div>
        <div className='col-12'>
          <label className="col-3" htmlFor="name">Number</label>
          <button className="btn btn-primary">-</button>
          <input type='number' disabled></input>
          <button className="btn btn-primary">+</button>
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
