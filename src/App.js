import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Incerementation,
  Decrementation,
  Login,
  Logout,
} from "./Redux/Actions";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.logged.logged);

  return (
    <div className="App">
      <h1>My Counter</h1>
      <h2>{counter}</h2>

      {isLogged ? (
        <button
          style={{
            backgroundColor: "red",
            display: "flex",
            fontSize: 20,
          }}
          onClick={() => dispatch(Logout())}
        >
          You are disconnected, tap to disconnect
        </button>
      ) : (
        <>
          <button
            style={{
              backgroundColor: "green",
              display: "flex",
              fontSize: 20,
            }}
            onClick={() => dispatch(Login())}
          >
            You are connected
          </button>
          <button onClick={() => dispatch(Incerementation())}>+</button>
          <button onClick={() => dispatch(Decrementation())}>-</button>
        </>
      )}
    </div>
  );
}

export default App;
