import {Component} from 'react';
import Form from './form';
import SaveBtn from './saveBtn';
import EditBtn from './editBtn';

class GeneralInfo extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
        <div>
            <h2>General Information</h2>
            <Form/>
            <SaveBtn/>
            <EditBtn/>
        </div>
    )
  }
}

export default GeneralInfo;