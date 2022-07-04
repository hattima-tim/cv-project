import {Component} from 'react';
import GeneralInfo from './components/generalInfo'
import EduExperience from './components/eduExperience/eduExperience'
import WorkExperience from './components/workExperience/workExperience'
import PrintComponent from './components/print/printingComponent';

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
        <PrintComponent/>
      </div>
    )
  }
}

export default App;
