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
import Form2 from './myComponents/Form2';
import SignUp from './myComponents/SignUp';
import Text from './myComponents/Text';
import Select from './myComponents/Select';
import List from './myComponents/List';
import JsonList from './myComponents/JsonList';
import styles from './Mycss.module.css';
import './My.scss';
import CountryList from './CountryList';
import Post from './Post';
import MyTable from './myComponents/MyTable';
import Navigation from './myComponents/Navigation';

function App() {
  const myStyle = {
    color :"Blue",
    backgroundColor : "LightBlue",
    padding : "10px",
    fontFamily : "Arial"
  };

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
      {/* <Form></Form> */}
      {/* <Form2></Form2> */}
      {/* <SignUp></SignUp> */}
      {/* <Text></Text> */}
      {/* <Select></Select> */}
      {/* <List></List> */}
      {/* <JsonList></JsonList> */}
      {/* <h1 style={myStyle}>Hello Nahian</h1> */}

      {/* <h1 className={styles.textStyle}>Hello Nahian</h1>

      <h1 className="TextStyle2">SASS</h1> */}
      {/* <CountryList></CountryList> */}
      {/* <Post></Post> */}
      {/* <MyTable></MyTable> */}
      <Navigation></Navigation>
    </div>
  );
}

export default App;
