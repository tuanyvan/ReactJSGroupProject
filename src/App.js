import "./App.css";

function FormComponent() {
  return (
    <div className="d-flex flex-row p-4">
      <div className="col-8">
        <div className="col-12">
          <label className="col-3" for="name">
            Name
          </label>
          <input type="text" id="name" name="name"></input>
        </div>
        <div className="col-12">
          <label className="col-3" for="number">
            Number
          </label>
          <button className="btn btn-primary">-</button>
          <input type="number" id="number" name="number" disabled></input>
          <button className="btn btn-primary">+</button>
        </div>
      </div>
      <div className="col-4 border"></div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <FormComponent />
    </div>
  );
}

export default App;
