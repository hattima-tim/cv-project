import {Component} from 'react';
import Form from './form';

class GeneralInfo extends Component{
  constructor(props){
    super(props);
    this.state={
      info:'',
    }
  }

  getInput=(input)=>{
    this.setState({
      info:input,
    })
  }

  render(){
    return(
        <div>
            <h2>General Information</h2>
            {this.state.info==='' &&
                <div>
                  <Form input={this.getInput}/>
                </div> 
            }

            {this.state.info!=='' &&
              <div>
                <p>First Name:{this.state.info.firstName}</p>
                <p>Last Name:{this.state.info.lastName}</p>
                <p>Email:{this.state.info.email}</p>
                <p>Phone:{this.state.info.phone}</p>
              </div>
            }
        </div>
    )
  }
}

export default GeneralInfo;