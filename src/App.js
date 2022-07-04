import {Component} from 'react';
import GeneralInfo from './components/generalInfo'
import EduExperience from './components/eduExperience/eduExperience'
import WorkExperience from './components/workExperience/workExperience'
import PrintComponent from './components/print/printingComponent';

class App extends Component{
  constructor(props){
    super(props);
  }

  sendDataToApp = (data,from) => {
    this.setState({
      [from]:data,
    })
  }

  render(){
    return(
      <div>
        <h1>Cv Project</h1>
        <GeneralInfo sendDataToApp={this.sendDataToApp} />
        <EduExperience sendDataToApp={this.sendDataToApp} />
        <WorkExperience sendDataToApp={this.sendDataToApp} />
        <PrintComponent/>
      </div>
    )
  }
}

export default App;
