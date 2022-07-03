import {Component} from 'react';

class EditBtn extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <button className="editBtn" onClick={this.props.onClick}>Edit</button>    
        )
    }
}

export default EditBtn;