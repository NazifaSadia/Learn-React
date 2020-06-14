import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './myComponents/Hello';
import Welcome from './myComponents/Welcome';
import Bootstrap from './myComponents/Bootstrap';
import Arrow from './myComponents/Arrow';
import State from './myComponents/State';
import Condition1 from './myComponents/Condition1';
import Refresh from './myComponents/Refresh';
import Render_Hydrate from './myComponents/Render_Hydrate';
import FindDOMNode from './myComponents/FindDOMNode';
import Form from './myComponents/Form';


function App() {
  return (
    <div className="App">
      {/* <Hello name="Nazifa" age="25"></Hello> */}
      {/* <Hello name="Sadia" age="20"></Hello>
      <Hello name="Aminta" age="7"></Hello>
      <Hello name="Nusaiba" age="14"></Hello> */}

      {/* <Welcome name="Nazifa" age="25"></Welcome> */}

      {/* <Bootstrap></Bootstrap>
      <Arrow></Arrow> */}

      {/* <State></State> */}
      {/* <Condition1></Condition1> */}
      {/* <Refresh></Refresh> */}
      {/* <Render_Hydrate></Render_Hydrate> */}
      {/* <FindDOMNode></FindDOMNode> */}
      <Form></Form>
    
    </div>
  );
}

export default App;
