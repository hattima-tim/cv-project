import {Component} from 'react';
import Form from './form';
import uniqid from 'uniqid';

class ExperienceFactory extends Component{

    render(){
        const {expContainer,handleEdit,placesWhereEditIsOpen} = this.props;
        const expList = expContainer.map((exp,index)=>{
            const id=uniqid();
            const editIsOnForThisExp=placesWhereEditIsOpen.find((editExp)=> JSON.stringify(editExp[0])===JSON.stringify(exp));
            //editExp=[the exp being edited,it's index in expContainer]
            //editIsOnForThisExp has two possible value
            //undefined: when the current exp from map loop is not being edited
            //exp: when the current exp from map loop is being edited
            if(editIsOnForThisExp){
                return <Form 
                    key={id} 
                    editedExpNum={editIsOnForThisExp[1]} 
                    input={this.props.input} 
                    previousValues={editIsOnForThisExp[0]}
                    handleDelete={this.props.handleDelete}/>
            }
            return(
                <div key={id}>
                <p>Company Name: {exp.companyName}</p>
                <p>Position Title: {exp.positionTitle}</p>
                <p>From: {exp.from}</p>
                <p>To: {exp.to}</p>
                <p>Details: { exp.details}</p>
                <button id={index} className='editBtn' onClick={handleEdit}>Edit</button>
                </div>
            )
        });
        return <div>{expList}</div>
    }
}

export default ExperienceFactory;