import {Component} from 'react';
import '../styles/form.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

class Form extends Component{
    constructor(props){
        super(props)
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const firstName=e.target.previousSibling[0].value;
        const lastName=e.target.previousSibling[2].value;
        const email=e.target.previousSibling[4].value;
        const phone=e.target.previousSibling[6].value;
        const details = e.target.previousSibling[8].value;
        this.props.input({firstName,lastName,email,phone,details})
    }

    render(){
        return(
            <div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': {m:1,width:'30ch'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField type='text' id="First Name" label='First Name'  defaultValue={this.props.previousValues.firstName ||''} variant="outlined" required/>
                    <TextField type='text' id="Last Name" label='Last Name' defaultValue={this.props.previousValues.lastName ||''} variant="outlined" required/>
                    <TextField type='email' id="Email" label='Email' defaultValue={this.props.previousValues.email ||''} variant="outlined" required/>
                    <TextField type='number' id="Phone" label='Phone' defaultValue={this.props.previousValues.phone ||''} variant="outlined" required/>
                    <TextField id="Details" multiline rows={1} label='Details'  defaultValue={this.props.previousValues.details ||''} variant="outlined" required/>
                </Box>
                    <button className='saveBtn' onClick={this.handleSubmit}>Save</button>
            </div>
        )
    }
}

export default Form;