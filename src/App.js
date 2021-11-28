import './App.css';
import React, { Component } from 'react';
import Personal from './components/PersonalInfo';
import Education from './components/Education';

class App extends Component {
  constructor(props){
    super(props);

      this.state = {
        firstName: "",
        lastName: "",
        birthDate: "",
        ocupation: "",
        email: "",
        personalFormOpen: false,
        submitted: false,
        institutionName: "",
        studyField: "",
        graduationDate: "",
        degree: "",
        educationFormOpen: false,
        eduInfoSubmitted: false,
        experiance: []
      };

      this.openTheForm = () => {
        this.setState({
          personalFormOpen: true,
          submitted: false})
      };

      this.openEduForm = () => {
        this.setState({
          educationFormOpen: true,
          eduInfoSubmitted: false
        })
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
          personalFormOpen: false,
          submitted: true,
        })
      }

      this.submitEduForm = (e) => {
        e.preventDefault();
        this.setState({
          institutionName: this.state.institutionName,
          studyField: this.state.studyField,
          graduationDate: this.state.graduationDate,
          degree: this.state.degree,
          educationFormOpen: false,
          eduInfoSubmitted: true
        })
      }
  }

  render(){
    return (
      <div className="App">
        <div className="personalInfo">
          <header>
            <h1>Personal information</h1>
            <button onClick={this.openTheForm} disabled={this.state.personalFormOpen}>{this.state.submitted ? 'Edit' : 'Add'}</button>
          </header>
          <form className={this.state.personalFormOpen ? "formOpen" : ""}>
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
              <button type="button" onClick={()=>{this.setState({personalFormOpen: false})}}>Cancel</button>
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
        <div className="personalInfo education">
          <header>
          <h1>Education</h1>
            <button onClick={this.openEduForm}>{this.state.eduInfoSubmitted ? "Edit" : "Add"}</button>
          </header>
          <form className={`eduFrom ${this.state.educationFormOpen ? "formOpen" : " "}`}>
            <fieldset className="info ed-info">
              <input type="text" onChange={this.handleTheInput} id="institutionName" placeholder="Enter the institution name"/>
              <input type="text" onChange={this.handleTheInput} id="studyField" placeholder="Field of study"/>
              <label htmlFor="degree">The degree you obtained</label>
              <select onChange={this.handleTheInput} name="edu-degree" id="degree">
                <option value="PHD">Ph.D</option>
                <option value="MBA">MBA</option>
                <option value="bachelor">Bachelor</option>
                <option value="other">Other</option>
              </select>
              {this.state.degree === "other" ?
              <input onChange={this.handleTheInput} type="text" id="intDegree" placeholde="Enter the degree" /> : null}
              <label htmlFor="graduationDate">Year of Graduation</label>
              <input onChange={this.handleTheInput} type="date" id="graduationDate"/>
            </fieldset>
            <fieldset className="action">
              <button type="submit" onClick={this.submitEduForm}>Submit</button>
              <button type="button" onClick={()=>{this.setState({educationFormOpen: false})}}>Cancel</button>
            </fieldset>
          </form>
          {this.state.eduInfoSubmitted ?
          <Education
            institutionName={this.state.institutionName}
            studyField={this.state.studyField}
            degree={this.state.degree}
            graduation={this.state.graduationDate}
          /> : null}

        </div>
      </div>
    )
  }
}

export default App;
