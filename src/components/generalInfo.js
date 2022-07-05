import {Component} from 'react';
import Form from './form';
import EditBtn from './editBtn';
import "../styles/generalInfo.css"

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
      info: input,
      editOn: false
    });
    this.props.sendDataToApp(input,'generalInfo')
  }

  handleEdit=()=>{
    this.setState({
      editOn:true
    })
  }

  render(){
    return(
        <div className='generalInfo_container'>
            <h2>General Information</h2>
            {this.state.info==='' && this.state.editOn===false &&
                  <Form input={this.getInput} previousValues={this.state.info}/>
            }
            {this.state.info!=='' && this.state.editOn===true &&
                  <Form input={this.getInput} previousValues={this.state.info}/>
            }
            {this.state.info!=='' && this.state.editOn===false &&
              <div className='generalInfo'>
                <p>First Name: {this.state.info.firstName}</p>
                <p>Last Name: {this.state.info.lastName}</p>
                <p>Email: {this.state.info.email}</p>
                <p>Phone: {this.state.info.phone}</p>
                <p>Details: {this.state.info.details}</p>
                <EditBtn className='editBtn' onClick={this.handleEdit}/>
              </div>
            }
        </div>
    )
  }
}

export default GeneralInfo;