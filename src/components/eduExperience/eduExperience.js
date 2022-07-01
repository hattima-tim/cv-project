import {Component} from 'react';
import Form from './form';
import './eduExperience.css'
import ExperienceFactory from './experienceFactory';

class eduExp extends Component{
  constructor(props){
    super(props);
    this.state={
      expContainer:[],
      placesWhereEditIsOpen:[], //this will hold all the exp that are being edited
    }
  }

  handleInput=(input,editedExpNumberForEditedSubmit)=>{
    if(editedExpNumberForEditedSubmit!==undefined){
      this.setState((prevState)=>({
        expContainer:prevState.expContainer.map((exp,index)=>{
          if(index===editedExpNumberForEditedSubmit){
            //editedExpNumber is calculated based on it's index in expContainer
            return input; //means this input is updated/edited,so replace it with old one
          }else{
            return exp; 
          }
        }),
        placesWhereEditIsOpen:prevState.placesWhereEditIsOpen.filter((expWhereEditisOpen)=>{
          return expWhereEditisOpen[1]!==editedExpNumberForEditedSubmit;
        }),
      }))
    }else{
      this.setState((prevState)=>({
        expContainer:[...prevState.expContainer,input],
      }))
    }
  }

  handleEdit=(event)=>{
    const theExpWhereEditIsHappening=this.state.expContainer[event.target.id];
    const expNumber=Number(event.target.id);
    this.setState((prevState)=>({
      placesWhereEditIsOpen:[...prevState.placesWhereEditIsOpen,[theExpWhereEditIsHappening,expNumber]]
    }))
  }

  render(){
    return(
        <div className='eduExp_container'>
            <h2>Educational Experience</h2>
            {this.state.expContainer.toString()==='' && this.state.placesWhereEditIsOpen.toString()==='' &&
                  //[].toString()=''(an empty string)
                  <Form input={this.handleInput} previousValues={this.state.expContainer}/>
                  //the previousValues prop in upper line is only there to prevent error in
                  //the Form component that previousValues is undefined.
            }
            {this.state.expContainer.toString &&
              <ExperienceFactory input={this.handleInput} placesWhereEditIsOpen={this.state.placesWhereEditIsOpen} expContainer={this.state.expContainer} handleEdit={this.handleEdit}/>
            }
        </div>
    )
  }
}

export default eduExp;