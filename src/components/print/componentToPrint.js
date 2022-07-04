import { Component } from'react'
import './printStyle.css'
import uniqid from 'uniqid';

class ComponentToPrint extends Component {
  render() {
    const { generalInfo, eduExperiences, workExperiences } = this.props;
      return (
        <div>
            <div className='header'>
              <h1>{`${generalInfo.firstName} ${generalInfo.lastName}`}</h1>
              <div className='contact'>
                <p>Email: {generalInfo.email}</p>
                <p>Phone: {generalInfo.phone}</p>
              </div>
            </div>
          
            <div className='education_container'>
              <h1>Education</h1>
              {
                eduExperiences.map((exp) => {
                  const uniqKey=uniqid()
                  return (
                    <div key={uniqKey} className='eduInfo'>
                      <p>{exp.titleOfStudy}</p>
                      <p>{ `${exp.schoolName} | ${exp.from}-${exp.to}` }</p>
                    </div>
                    )
                  })
              }
            </div>
            
            <div className='work_container'>
              <h1>Work Experience</h1>
              {
                workExperiences.map((exp) => {
                  const uniqKey=uniqid()
                  return (
                    <div key={uniqKey} className='workExperiences'>
                      <p>{exp.positionTitle}</p>
                      <p>{ `${exp.companyName} | ${exp.from}-${exp.to}` }</p>
                    </div>
                    )
                  })
              }
            </div>  
        </div>
      );
    }
  }
  
export default ComponentToPrint;