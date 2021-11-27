import './App.css';
import React, { Component } from 'react';
import Personal from './components/PersonalInfo';

class App extends Component {
  constructor(props){
    super(props);

      this.state = {
        firstName: "",
        lastName: "",
        birthDate: "",
        ocupation: "",
        email: "",
        mount: false,
        submitted: false
      }

      this.openTheForm = () => {
        this.setState({
          mount: true,
          submitted: false})
      };

      this.handleTheInput = (e) => {
        const value = e.target.value;
        this.setState({
          [e.target.id]: value
        });
      }

      this.submitInfo = (e) => { 
        e.preventDefault();
        this.setState({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          ocupation: this.state.ocupation,
          email: this.state.email,
          mount: false,
          submitted: true
        })
      }
  }

  render(){
    return (
      <div className="App">
        <div className="personalInfo">
          <header>
            <h1>Personal information</h1>
            <button onClick={this.openTheForm} disabled={this.state.mount}>{this.state.submitted ? 'Edit' : 'Add'}</button>
          </header>
          <form className={this.state.mount ? "formOpen" : ""}>
            <fieldset className="info">
              <input type="text"  id="firstName" onChange={this.handleTheInput}  placeholder="First Name"/>
              <input type="text"  id="lastName" onChange={this.handleTheInput} placeholder="last Name"/>
              <label htmlFor="birthDate">Date of your birthdat</label>
              <input type="date" onChange={this.handleTheInput} id="birthDate" />
              <input type="text" onChange={this.handleTheInput} id="ocupation" placeholder="Ocupation"/>
              <input type="email" onChange={this.handleTheInput} id="email" placeholder="Email address"/>
            </fieldset>
            <fieldset className="action">
              <button type="submit" onClick={this.submitInfo}>Submit</button>
              <button type="button" onClick={()=>{this.setState({mount: false})}}>Cancel</button>
            </fieldset>
          </form>
          {this.state.submitted ? 
          <Personal 
            firstName={this.state.firstName} 
            lastName={this.state.lastName} 
            ocupation={this.state.ocupation} 
            birthday={this.state.birthDate}
            email={this.state.email}
            /> : null}
        </div>
      </div>
    )
  }
}

export default App;
