import {Component} from 'react';
import '../../styles/form.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

class Form extends Component{

    getTodayDate=()=>{
        let todayDate = new Date()
        const offset = todayDate.getTimezoneOffset()
        todayDate = new Date(todayDate.getTime() - (offset*60*1000))
        return todayDate.toISOString().split('T')[0]
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const schoolName=e.target.previousSibling[0].value;
        const titleOfStudy=e.target.previousSibling[2].value;
        const from=e.target.previousSibling[4].value;
        let to = e.target.previousSibling[6].value;
        if(this.getTodayDate()===to){
            to='Present';
        }
        const details = e.target.previousSibling[8].value;
        const editedExpNumberForEditedSubmit=this.props.editedExpNum;
        this.props.input({schoolName,titleOfStudy,from,to,details},editedExpNumberForEditedSubmit)
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
                    <TextField type='text' id="schoolName" label='School Name'  defaultValue={this.props.previousValues.schoolName ||''} variant="outlined" required/>
                    <TextField type='text' id="titleOfStudy" label='Title Of Study' defaultValue={this.props.previousValues.titleOfStudy ||''} variant="outlined" required/>
                    <TextField type='date' id="from" label='From' InputLabelProps={{ shrink: true }} defaultValue={this.props.previousValues.from ||''} variant="outlined" required/>
                    <TextField type='date' id="to" label='To' InputLabelProps={{ shrink: true }} defaultValue={this.props.previousValues.to ||''} variant="outlined" required/>
                    <TextField id="Details" multiline rows={1} label='Details'  defaultValue={this.props.previousValues.details ||''} variant="outlined" required/>
                </Box>
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