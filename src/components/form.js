import {Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <form>
                <label for='firstName'>First Name</label>
                <input type='text' name='firstName' id='firstName' required></input>
                <label for='lastName'>Last Name</label>
                <input type='text' name='lastName' id='lastName' required></input>
                <label for='email'>Email</label>
                <input type='email' name='email' id='email' required></input>
                <label for='phone'>Phone Number</label>
                <input type='tel' name='phone' id='phone' required></input>
            </form>
        )
    }
}

export default Form;