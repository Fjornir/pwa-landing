import React from "react";
import Header from "./components/Header";
import "./style/main.scss"
import AppTitle from './components/AppTitle';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AppTitle name={"22BET"} author={"Casino"}/>
    </div>
  );
}

export default App;
