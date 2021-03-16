import React, {Component} from 'react'
import {MDBBtn, MDBInput   } from 'mdbreact';
import AuthService from '../../services/AuthService'

class LoginComponent extends Component{

    constructor(props) {
        super(props)
        this.state = {      
            username: "",
            password: ""
        }

        this.cancelButton = this.cancelButton.bind(this)
        
    }

    cancelButton(){
        this.props.history.push(`/table`)
    }

    changeHandler = event => {
        console.log(event.target.value)
        this.setState({ [event.target.name]: event.target.value });
    }

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated"; 
        AuthService.executeJwtAuthenticationService(this.state.username, this.state.password)
        .then(
            (response) => {
                AuthService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
                console.log(response.data.token)
                this.props.history.push(`/table`)
            }
        )
        .catch(
            ()=> {
                this.setState({showSuccessMessage:false})
                this.setState({hasLoginFailed:true})
            }
        )


        
    };

    render(){
        return (
            <div style = {{width:'50%', padding:'50px'}}>
                <form onSubmit={this.submitHandler}>
                    <MDBInput onChange={this.changeHandler} label="Login" name = "username" value = {this.state.username} />
                    <MDBInput onChange={this.changeHandler}  label="Password" type=  "password" name = "password" value = {this.state.password} />


                    <MDBBtn color="primary" type ="submit" >Submit</MDBBtn>
                    <MDBBtn color="danger" onClick = {this.cancelButton}>Cancel</MDBBtn>
                </form>
            </div>
          );
    }
}


export default LoginComponent