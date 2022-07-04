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
      newExpIsBeingAdded:true,
      displayStyleForAddNewBtn:''
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
      }));
      
      setTimeout(() => {
        this.props.sendDataToApp(this.state.expContainer, 'eduExperiences')
      }, 0);

    }else{
      this.setState((prevState) => ({
        expContainer: [...prevState.expContainer, input],
        newExpIsBeingAdded: false,
        displayStyleForAddNewBtn: 'block' //to ensure there is a add new btn under a new exp section
      }));
      
      setTimeout(() => {
        this.props.sendDataToApp(this.state.expContainer, 'eduExperiences')
      }, 0);
      
    }
  }

  handleEdit=(event)=>{
    const theExpWhereEditIsHappening=this.state.expContainer[event.target.id];
    const expNumber=Number(event.target.id);
    this.setState((prevState)=>({
      placesWhereEditIsOpen:[...prevState.placesWhereEditIsOpen,[theExpWhereEditIsHappening,expNumber]]
    }))
  }

  handleAddNewButtonClick=(event)=>{
    event.target.style.display='none';
    this.setState({
      newExpIsBeingAdded:true,
      displayStyleForAddNewBtn:'none', //to remove the btn when it is clicked once
    });
  }

  handleDelete=(e)=>{
    if(e.target.id!==''){
      const indexOfExpWhoseFormBeingDeleted=Number(e.target.id);
      this.setState((prevState)=>({
        expContainer:prevState.expContainer.filter((exp,index)=>{
          return index!==indexOfExpWhoseFormBeingDeleted;
        }),
        placesWhereEditIsOpen:prevState.placesWhereEditIsOpen.filter((exp)=>{
          return exp[1]!==indexOfExpWhoseFormBeingDeleted;
        })
      }))
    }else{
      this.setState({
        newExpIsBeingAdded:false,
        displayStyleForAddNewBtn:'block',
      })
    }
  }

  render(){
    return(
        <div className='eduExp_container'>
            <h2>Educational Experience</h2>
            {(this.state.expContainer.toString()!=='' || this.state.newExpIsBeingAdded===false) &&
            //newExpIsBeingAdded===false is added in upper line to show Add New
            //button when the first exp form is deleted and thus newExpIsBeingAdded
            //becomes false
            <div>
              <ExperienceFactory 
                input={this.handleInput} 
                placesWhereEditIsOpen={this.state.placesWhereEditIsOpen} 
                expContainer={this.state.expContainer} 
                handleEdit={this.handleEdit}
                handleAddNewButtonClick={this.handleAddNewButtonClick} 
                handleDelete={this.handleDelete}
              />
              <button className='addNewBtn' style={{display:`${this.state.displayStyleForAddNewBtn}`}} onClick={this.handleAddNewButtonClick}>Add New</button>
            {/* AddNew btn is here and not in the ExperienceFactory ,to ensure
            there is a add new btn under all the exp sections */}
            </div>
            }
            {this.state.newExpIsBeingAdded===true  &&
                  //[].toString()=''(an empty string)
                  <Form 
                    input={this.handleInput} 
                    previousValues={this.state.expContainer}
                    handleDelete={this.handleDelete}/>
                  //the previousValues prop in upper line is only there to prevent error in
                  //the Form component which is previousValues is undefined.
            }
        </div>
    )
  }
}

export default eduExp;