import {Component} from 'react';
import Form from './form';
import EditBtn from '../editBtn';
import './eduExperience.css'

class eduExp extends Component{
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
        <div className='eduExp_container'>
            <h2>Educational Experience</h2>
            {this.state.info==='' && this.state.editOn===false &&
                  <Form input={this.getInput} previousValues={this.state.info}/>
            }
            {this.state.info!=='' && this.state.editOn===true &&
                  <Form input={this.getInput} previousValues={this.state.info}/>
            }
            {this.state.info!=='' && this.state.editOn===false &&
              <div>
                <p>School Name:{this.state.info.schoolName}</p>
                <p>Title of study:{this.state.info.titleOfStudy}</p>
                <p>From:{this.state.info.from}</p>
                <p>To:{this.state.info.to}</p>
                <EditBtn onClick={this.handleEdit}/>
              </div>
            }
        </div>
    )
  }
}

export default eduExp;