import {Component} from 'react';
import GeneralInfo from './components/generalInfo'
import EduExperience from './components/eduExperience/eduExperience'

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
      </div>
    )
  }
}

export default App;
