import React, { useState } from "react";


export default function Form () {
    const [member, setMember] = useState({name: "", email: "", role: ""});

    function handleChange(event) {
        const updatedMember = {...member, [event.target.name]: event.target.value};
        console.log("handleChange", event.target.name, event.target.value, updatedMember);
        setMember(updatedMember);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("user state", member);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name:</label>
                <input
                  type="name"
                  className="form-group"
                  name="name"
                  placeholder="Enter your Name"
                  onChange={handleChange}
                  value={member.name} />

            </div>
            <div className="form-group">
                <label>Email:</label>
                <input
                type="email"
                className="form-group"
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
                value={member.email}
                />
                
            </div>
            <div className="form-group">
                <label>Role:</label>
                <input
                type="role"
                className="form-group"
                name="role"
                placeholder="Enter your role"
                onChange={handleChange}
                value={member.role}
                />
                
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
}
