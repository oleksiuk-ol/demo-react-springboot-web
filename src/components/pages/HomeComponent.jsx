import React, {Component} from 'react'
import AuthService from "../../services/AuthService";

class HomeComponent extends Component{
    render(){
        const isUserLoggedIn = AuthService.isUserLoggedIn();
        return (
        <div>
             {!isUserLoggedIn && <h1>Welcome guest!</h1>}
             {isUserLoggedIn && <h1>Welcome {AuthService.getLoggedInUsername()}!</h1>}
        </div>
        )
    }
}

export default HomeComponent