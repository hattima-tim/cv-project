import {Component} from 'react';
import GeneralInfo from './components/generalInfo'

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <h1>Cv Project</h1>
        <GeneralInfo />
      </div>
    )
  }
}

export default App;
