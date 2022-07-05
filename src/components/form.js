import {Component} from 'react';
import '../styles/form.css'

class Form extends Component{
    constructor(props){
        super(props)
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const firstName=e.target.previousSibling[0].value;
        const lastName=e.target.previousSibling[1].value;
        const email=e.target.previousSibling[2].value;
        const phone=e.target.previousSibling[3].value;
        const details = e.target.previousSibling[4].value;
        this.props.input({firstName,lastName,email,phone,details})
    }

    render(){
        return(
            <div>
                <form>   
                    <div className='form_item'>
                        <label htmlFor='firstName'>First Name</label><br/>
                        <input type='text' name='firstName' id='firstName' placeholder='First Name' defaultValue={this.props.previousValues.firstName ||''} required></input>    
                    </div>
                    <div className='form_item'>
                        <label htmlFor='lastName'>Last Name</label><br/>
                        <input type='text' name='lastName' id='lastName' placeholder='Last Name' defaultValue={this.props.previousValues.lastName ||''} required></input>
                    </div>
                    <div className='form_item'>
                        <label htmlFor='email'>Email</label><br/>
                        <input type='email' name='email' id='email' placeholder='example@gmail.com' defaultValue={this.props.previousValues.email ||''} required></input>
                    </div>
                    <div className='form_item'>
                        <label htmlFor='phone'>Phone Number</label><br/>
                        <input type='tel' name='phone' id='phone' placeholder='123-456-7890' defaultValue={this.props.previousValues.phone ||''} required></input>
                    </div>
                    <div className='form_item'>
                        <label htmlFor='details'>Details:</label><br/>
                        <textarea id='details' name='details' rows='4' cols='53' placeholder='Details' defaultValue={this.props.previousValues.details || ''}></textarea>
                    </div>
                </form>
                <button className='saveBtn' onClick={this.handleSubmit}>Save</button>
            </div>
        )
    }
}

export default Form;