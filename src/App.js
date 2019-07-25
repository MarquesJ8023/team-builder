import React, {useState} from 'react';
import {group} from './component/Data.js';
import  './App.css';
import Form from "./component/Form.js";


function App() {
  // eslint-disable-next-line
  const [members, setMembers] = useState(group);
  console.log(members);
  return (
    <div className="App">
      
       <h1>Teams</h1>
       {members.map((team, index) => (
         <Form key={index} team={group} />
       ))}
       <Form />
       
    </div>
  );
}

export default App;
