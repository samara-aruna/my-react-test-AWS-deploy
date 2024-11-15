import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homecomponent from './Homecomponent';
import { BrowserRouter as Router, Route, Routes as Routers} from 'react-router-dom';
import Aboutcomponent from './Aboutcomponent';
import Text2 from './Text2';
// import myData, { myData } from './Data/Mydata';
// import {myData2} from './Data/Mydata';
import Text3 from './Text3';
import { myData3 } from './Data/Mydata';
import Text6 from './Text6';

import Text4 from './Text4';
import Text5 from './Text5';
import Text7 from './Text7';
import Text8 from './Text8';
import Text9 from './Text9';
import Text10 from './Text10';


function App() 
{
  return (
    <div>
    <Router>
      <Homecomponent/>
        <Routers>
          <Route path="/about" element={<Aboutcomponent/>}/>
          <Route path="/home"  element={<Homecomponent/>}/>
          <Route path="/second" element={<Text10/>}/>
        </Routers>
    </Router>
    {/* <Text>
      <p> Aruna Samarasinghe</p>
    </Text> */}

    {/* <Text name="Aruna Age=25 position=Frontend Developer"/> */}

    {/* {
      myData2?.map(ele=>{
        return <Text2 name={ele.name} Age = {ele.Age} position = {ele.position} sex = {ele.sex} image={ele.image}/>
      })
    } */}

    {
      myData3?.map(ele=>
      {
        return <Text3 name={ele.name} Age = {ele.Age} position = {ele.position} sex = {ele.sex} image={ele.image}/>
      }
      )
    }

     <Text4/>
     <Text5/>
     <Text6/>
     <Text7/>
     <h3> Text 8 Result </h3>

     <Text8/>
     <br/>
     <br/>
     <Text9/>
     <br/>
     <br/>
  

    </div>
  );
}

export default App;
