import {Component} from 'react';
import Form from './form';
import EditBtn from './editBtn';

class GeneralInfo extends Component{
  constructor(props){
    super(props);
    this.state={
      info:'',
      editOn:false
    }
  }

  getInput=(input)=>{
    this.setState({
      info:input,
      editOn:false
    })
  }

  handleEdit=()=>{
    this.setState({
      editOn:true
    })
  }

  render(){
    return(
        <div>
            <h2>General Information</h2>
            {this.state.info==='' && this.state.editOn===false &&
                <div>
                  <Form input={this.getInput} previousValues={this.state.info}/>
                </div> 
            }
            {this.state.info!=='' && this.state.editOn===true &&
                <div>
                  <Form input={this.getInput} previousValues={this.state.info}/>
                </div>
            }
            {this.state.info!=='' && this.state.editOn===false &&
              <div>
                <p>First Name:{this.state.info.firstName}</p>
                <p>Last Name:{this.state.info.lastName}</p>
                <p>Email:{this.state.info.email}</p>
                <p>Phone:{this.state.info.phone}</p>
                <EditBtn onClick={this.handleEdit}/>
              </div>
            }
        </div>
    )
  }
}

export default GeneralInfo;