import React, { Component } from "react";

class Education extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const {institutionName, studyField, degree, graduation} = this.props;

    return(
      <div className="education-info">
        <p><b>Institution Name:</b> {institutionName}</p>
        <p><b>Field of Study:</b> {studyField}</p>
        <p><b>The degree obtained:</b> {degree}</p>
        <p><b>Graduation year:</b> {graduation}</p>
      </div>
    );
  }
}

export default Education;