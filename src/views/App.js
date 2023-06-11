import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "../components/Example/MyComponent";
import Nav from "../Nav/Nav";

function App() {
  return (
    <div className="App">
      {/* <Nav></Nav> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponent></MyComponent>
      </header>
    </div>
  );
}

export default App;
