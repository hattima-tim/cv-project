import {Component} from 'react';
import GeneralInfo from './components/generalInfo'
import EduExperience from './components/eduExperience/eduExperience'
import WorkExperience from './components/workExperience/workExperience'

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <h1>Cv Project</h1>
        <GeneralInfo />
        <EduExperience />
        <WorkExperience />
      </div>
    )
  }
}

export default App;
