import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import TodoTable from '../pages/TodoTable'
import CreateTodoComponent from '../pages/CreateTodoComponent'
import UpdateTodoComponent from '../pages/UpdateTodoComponent'
import LoginComponent from '../pages/LoginComponent'
import HomeComponent from '../pages/HomeComponent'


class Webapp extends Component {
    render(){
        return(
            <div className = "Webapp">
                <Router>
                    <HeaderComponent/> 
                    <Switch>
                        <Route path = "/home" component = {HomeComponent}/>
                        <Route path = "/login" component = {LoginComponent}/>
                        <Route path = "/table/add" component = {CreateTodoComponent}/>
                        <Route path = "/table/update/:id" component = {UpdateTodoComponent}/>
                        <Route path = "/table" component = {TodoTable}/>
                    </Switch>
                </Router>
         
            </div>
        )
    }
}

export default Webapp 