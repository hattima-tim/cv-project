import {Component} from 'react';
import '../../styles/form.css'

class Form extends Component{

    handleSubmit=(e)=>{
        e.preventDefault();
        const schoolName=e.target.previousSibling[0].value;
        const titleOfStudy=e.target.previousSibling[1].value;
        const from=e.target.previousSibling[2].value;
        const to=e.target.previousSibling[3].value;
        const editedExpNumberForEditedSubmit=this.props.editedExpNum;
        this.props.input({schoolName,titleOfStudy,from,to},editedExpNumberForEditedSubmit)
    }

    render(){
        return(
            <div>
                <form>   
                    <div className='form_item'>
                        <label htmlFor='schoolName'>School Name:</label><br/>
                        <input type='text' name='schoolName' id='schoolName' placeholder='School Name' defaultValue={this.props.previousValues.schoolName ||''} required></input>    
                    </div>
                    <div className='form_item'>
                        <label htmlFor='titleOfStudy'>Title of Study:</label><br/>
                        <input type='text' name='titleOfStudy' id='titleOfStudy' placeholder='Title of Study' defaultValue={this.props.previousValues.titleOfStudy ||''} required></input>
                    </div>
                    <div className='form_item'>
                        <label htmlFor='from'>From:</label><br/>
                        <input type='date' name='from' id='from' defaultValue={this.props.previousValues.from ||''} required></input>
                    </div>
                    <div className='form_item'>
                        <label htmlFor='to'>To:</label><br/>
                        <input type='date' name='to' id='to' defaultValue={this.props.previousValues.to ||''} required></input>
                    </div>
                </form>
                <button onClick={this.handleSubmit}>Save</button>
            </div>
        )
    }
}

export default Form;