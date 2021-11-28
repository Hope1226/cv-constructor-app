import React, { Component } from "react";

class Personal extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const { firstName, lastName, ocupation, birthday, email } = this.props;

    return (
      <div className="personalInfo">
        <h2><b>First Name:</b> {firstName}</h2>
        <h2><b>Last Name:</b> {lastName}</h2>
        <p><b>Occupation:</b> {ocupation}</p>
        <p><b>Date of Birth:</b> {birthday}</p>
        <p><b>Email:</b> {email}</p>
      </div>
    );
  }
}

export default Personal;