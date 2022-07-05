import {Component} from 'react';
import '../../styles/form.css'

class Form extends Component{

    handleSubmit=(e)=>{
        e.preventDefault();
        const companyName=e.target.previousSibling[0].value;
        const positionTitle=e.target.previousSibling[1].value;
        const from=e.target.previousSibling[2].value;
        const to = e.target.previousSibling[3].value;
        const details = e.target.previousSibling[4].value;
        const editedExpNumberForEditedSubmit=this.props.editedExpNum;
        this.props.input({companyName,positionTitle,from,to,details},editedExpNumberForEditedSubmit)
    }

    render(){
        return(
            <div>
                <form>   
                    <div className='form_item'>
                        <label htmlFor='companyName'>Company Name:</label><br/>
                        <input type='text' name='companyName' id='companyName' placeholder='Company Name' defaultValue={this.props.previousValues.companyName ||''} required></input>    
                    </div>
                    <div className='form_item'>
                        <label htmlFor='positionTitle'>Position Title:</label><br/>
                        <input type='text' name='positionTitle' id='positionTitle' placeholder='Position Title' defaultValue={this.props.previousValues.positionTitle ||''} required></input>
                    </div>
                    <div className='form_item'>
                        <label htmlFor='from'>From:</label><br/>
                        <input type='date' name='from' id='from' defaultValue={this.props.previousValues.from ||''} required></input>
                    </div>
                    <div className='form_item'>
                        <label htmlFor='to'>To:</label><br/>
                        <input type='date' name='to' id='to' defaultValue={this.props.previousValues.to ||''} required></input>
                    </div>
                    <div className='form_item'>
                        <label htmlFor='details'>Details:</label><br/>
                        <textarea id='details' name='details' rows='4' cols='53' placeholder='Details' defaultValue={this.props.previousValues.details || ''}></textarea>
                    </div>
                </form>
                <button className='saveBtn' onClick={this.handleSubmit}>Save</button>
                <button 
                    id={this.props.editedExpNum}
                    className='delete'
                    onClick={this.props.handleDelete}>Delete</button>
            </div>
        )
    }
}

export default Form;