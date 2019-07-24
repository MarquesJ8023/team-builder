import React, {useState} from 'react';
import Form from './component/Form.js';
import logo from './logo.svg';
import './App.css';


  function App() {
    const [
      members, 
      setMembers] = 
      useState({ name: "", email: "", role: "" });
  
    const teamMembers = event => {
      setMembers({ ...members, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      console.log(member.name);
      console.log(member.email);
      console.log(member.role);
    };
  
    return (
      <div className="movie-list">
        {members.map(form)};
      </div>
    );
    
    return (
      <div className="App">
        {console.log(member)}
        <form onSubmit={event => handleSubmit(event)}>
          <label>
            name:
            <input
              type="text"
              name="name"
              value={member.name}
              onChange={event => handleChange(event)}
            />
          </label>
          <label>
            email:
            <input
              type="text"
              name="email"
              value={member.email}
              onChange={event => handleChange(event)}
            />
          </label>
          <label>
          <input>
              type="text"
              name="role"
              value={member.role}
              onChange={event => handleChange(event)}
            />
          </label>
          <button>Submit!</button>
        </form>
      </div>
          <button>Submit!</button>
        </form>
      </div>
    );
  }

  export default App;
 
