import {Component} from 'react';
import GeneralInfo from './components/generalInfo'
import EduExperience from './components/eduExperience/eduExperience'
import WorkExperience from './components/workExperience/workExperience'
import PrintComponent from './components/print/printingComponent';
import './App.css'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      generalInfo: '',
      eduExperiences: [],
      workExperiences:[],
    }
  }

  sendDataToApp = (data,from) => {
    this.setState({
      [from]:data,
    })
  }

  render(){
    return(
      <div>
        <h1 className='projectName'>Cv Project</h1>
        <GeneralInfo sendDataToApp={this.sendDataToApp} />
        <EduExperience sendDataToApp={this.sendDataToApp} />
        <WorkExperience sendDataToApp={this.sendDataToApp} />
        <PrintComponent
          generalInfo={this.state.generalInfo}
          eduExperiences={this.state.eduExperiences}
          workExperiences={this.state.workExperiences}
        />
      </div>
    )
  }
}

export default App;
