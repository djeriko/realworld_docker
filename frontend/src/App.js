import React from "react"
import axios from "axios"
import logo from "./logo.svg"
import "./App.css"

function App() {
  const makeApiRequest = () => {
    console.log("Make API §orequest")
    axios("/api/testwithcurrentuser").then((response) => {
      console.log(response)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Yo. Change with Docker. Edit <code>src/App.js</code> and save to
          reload. We are in dev mode
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={makeApiRequest}>Make API request</button>
    </div>
  )
}

export default App
