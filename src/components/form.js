import {Component} from 'react';

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
            <form onSubmit={this.handleSubmit}>   
                <label htmlFor='firstName'>First Name</label>
                <input type='text' name='firstName' id='firstName' required></input>
                <label htmlFor='lastName'>Last Name</label>
                <input type='text' name='lastName' id='lastName' required></input>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' id='email' required></input>
                <label htmlFor='phone'>Phone Number</label>
                <input type='tel' name='phone' id='phone' required></input>
                <button type='submit'>Save</button>
            </form>
        )
    }
}

export default Form;