import {Component} from 'react';
import '../styles/form.css'

class Form extends Component{
    constructor(props){
        super(props)
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const firstName=e.target.childNodes[1].value;
        const lastName=e.target.childNodes[3].value;
        const email=e.target.childNodes[5].value;
        const phone=e.target.childNodes[7].value;
        this.props.input({firstName,lastName,email,phone})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>   
                    <div className='form_item'>
                        <label htmlFor='firstName'>First Name</label><br/>
                        <input type='text' name='firstName' id='firstName' defaultValue={this.props.previousValues.firstName ||''} required></input>    
                    </div>
                    <div className='form_item'>
                        <label htmlFor='lastName'>Last Name</label><br/>
                        <input type='text' name='lastName' id='lastName' defaultValue={this.props.previousValues.lastName ||''} required></input>
                    </div>
                    <div className='form_item'>
                        <label htmlFor='email'>Email</label><br/>
                        <input type='email' name='email' id='email' defaultValue={this.props.previousValues.email ||''} required></input>
                    </div>
                    <div className='form_item'>
                        <label htmlFor='phone'>Phone Number</label><br/>
                        <input type='tel' name='phone' id='phone' defaultValue={this.props.previousValues.phone ||''} required></input>
                    </div>
                </form>
                <button type='submit'>Save</button>
            </div>
        )
    }
}

export default Form;