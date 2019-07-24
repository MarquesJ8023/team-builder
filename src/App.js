import React, {useState} from 'react';
import './App.css';
import Form from "./component/Form";


function App() {
  // eslint-disable-next-line
  const [member, setMember] = useState([]);
  console.log(member);
  return (
    <div className="App">
      
       <h1>Teams</h1>
       {member.map(person => (
         <Form key={person.info} info={person} />
       ))}
       <Form />
       
    </div>
  );
}

export default App;
