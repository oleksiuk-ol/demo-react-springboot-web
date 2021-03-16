import React, {Component} from 'react'
import {MDBBtn, MDBInput   } from 'mdbreact';
import TodoDataService from '../../services/TodoDataService'

class CreateTodoComponent extends Component{
    constructor(props) {
        super(props)      
        this.state = {        
            username: "",
            description: "",
            targetDate: "",
            status: "",
        }
        this.cancelButton = this.cancelButton.bind(this)   
    }

    changeHandler = event => {
        console.log(event.target.value)
        this.setState({ [event.target.name]: event.target.value });
      };

    submitHandler = event => {

        event.preventDefault();
        event.target.className += " was-validated";
        
        
        TodoDataService.createTodo({
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
        TodoDataService.createTodo({
            username: this.state.username,
            description: this.state.description,
            targetDate: this.state.targetDate,
            status: this.state.status
        }).then(
            ()=> {
                this.props.history.push('/todos')
            }
        )
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

export default CreateTodoComponent