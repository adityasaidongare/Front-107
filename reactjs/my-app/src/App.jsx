// App.jsx
import React from "react";

function App() {
  let time = new Date().toString();
  let a = 10, b = 20;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Congratulation, You completed first react app</h1>
      <p>Hello Time = {time}</p>
      <p>{a} + {b} = {a + b}</p>
      
      <h2>Home Component</h2>
      <h2>About Component</h2>
      <h2>Contact Component</h2>
    </div>
  );
}

export default App;
