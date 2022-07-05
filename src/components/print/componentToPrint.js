import { Component } from'react'
import './printStyle.css'
import uniqid from 'uniqid';

class ComponentToPrint extends Component {
  render() {
    const { generalInfo, eduExperiences, workExperiences } = this.props;
      return (
        <div className='cvContainer'>
            <div className='header'>
              <h1 className='name'>{`${generalInfo.firstName} ${generalInfo.lastName}`}</h1>
              <div className='contact'>
                <p className='printItem'>Email: {generalInfo.email}</p>
                <p className='printItem'>Phone: {generalInfo.phone}</p>
              </div>
            </div>
          
            <div className='education_container'>
              <h2 className='eduHeader'>Education</h2>
              {
                eduExperiences.map((exp) => {
                  const uniqKey=uniqid()
                  return (
                    <div key={uniqKey} className='eduInfo'>
                      <p className='printItem'>{exp.titleOfStudy}</p>
                      <p className='printItem'>{ `${exp.schoolName} | ${exp.from}-${exp.to}` }</p>
                    </div>
                    )
                  })
              }
            </div>
            
            <div className='work_container'>
              <h2 className='workHeader'>Work Experience</h2>
              {
                workExperiences.map((exp) => {
                  const uniqKey=uniqid()
                  return (
                    <div key={uniqKey} className='workExperiences'>
                      <p className='printItem'>{exp.positionTitle}</p>
                      <p className='printItem'>{ `${exp.companyName} | ${exp.from}-${exp.to}` }</p>
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