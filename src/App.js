import React from "react";
import Typing from "./components/typing";
import CircleText from "./components/circleText";
import T from "./components/testing";

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="App">
        <Typing/>
        {/* <CircleText /> */}
      </div>
      <div style={{ position: 'absolute', marginTop: '50vh' }}>
        <T/>
      </div>
    </div>
  );
}


export default App;
