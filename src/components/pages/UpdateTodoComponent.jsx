import React, {Component} from 'react'
import {MDBBtn, MDBInput   } from 'mdbreact';
import TodoDataService from '../../services/TodoDataService'
import moment from 'moment'


class UpdateTodoComponent extends Component{
    constructor(props) {
        super(props)  

        this.state = {
            id : this.props.match.params.id,
            username: "",
            description: "",
            targetDate: "",
            status: "",
        }
        console.log("constructor")
        this.cancelButton = this.cancelButton.bind(this)
        
    }

    componentDidMount(){

        TodoDataService.getTodo(this.state.id)
            .then(response => this.setState({
                username: response.data.username,
                description: response.data.description,
                targetDate: moment(response.data.targetDate).format('YYYY-MM-DD'),
                status: response.data.status
            }))
    }



    changeHandler = event => {
        console.log(event.target.value)
        this.setState({ [event.target.name]: event.target.value });
      };

    submitHandler = event => {

        event.preventDefault();
        event.target.className += " was-validated";
    
        TodoDataService.updateTodo( this.state.id, {
            username: this.state.username,
            description: this.state.description,
            targetDate: this.state.targetDate,
            status: this.state.status
        }).then(
            ()=> {
                this.props.history.push('/table')
            }
        )
      };

    cancelButton(){
        this.props.history.push(`/table`)
    }

    submitButton(){
        this.props.history.push(`/table`)
    }

    render(){
        return (
            <div style = {{width:'50%', padding:'50px'}}>
                <form onSubmit={this.submitHandler}>
                    <MDBInput onChange={this.changeHandler} label="Username" name = "username" value = {this.state.username} />
                    <MDBInput onChange={this.changeHandler} label="Description" name = "description" value = {this.state.description}  />
                    <MDBInput onChange={this.changeHandler} type=  "date" name = "targetDate" value = {this.state.targetDate} />
                    <MDBInput onChange={this.changeHandler} label= "Status" name = "status" value = {this.state.status} />

                    <MDBBtn color="primary" type ="submit" >Submit</MDBBtn>
                    <MDBBtn color="danger" onClick = {this.cancelButton}>Cancel</MDBBtn>
                </form>
            </div>
          );
    }
}

export default UpdateTodoComponent