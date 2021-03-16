import React, {Component} from 'react'
import { MDBTable, MDBBtn, MDBTableBody, MDBTableHead} from 'mdbreact';
import TodoDataService from '../../services/TodoDataService'
import moment from 'moment'

const texTdStyle = {
    fontSize: '20px',
    verticalAlign : 'middle',
  };

class TodoTable extends Component {
  
    constructor(props){
        console.log('constructor')
        super(props)

        this.state = {
            todoEntity: [
            ],
            message : null
        }
        this.refreshTodos = this.refreshTodos.bind(this)
        this.addButton = this.addButton.bind(this)
        this.updateButton = this.updateButton.bind(this)
    }

    componentDidMount(){
        this.refreshTodos();
    }

    addButton(){
        this.props.history.push(`/table/add`)
    }

    updateButton(id){
            console.log('update')
            this.props.history.push(`/table/update/${id}`)
    }

    deleteButton(id){
        console.log(id);
        TodoDataService.deleteTodo(id)
                .then(
            response => {
                this.setState({message : `Delete of todo ${id} Successful`})
                this.refreshTodos();
            }
        )   
    }

    refreshTodos(){
        TodoDataService.getAllTodos()
        .then(
            response => {
                this.setState({todoEntity:response.data})
            }
        )
    }

    render(){
        console.log("render")
        return(
            <div>
                <MDBTable >
                <MDBTableHead color="primary-color" textWhite>
                <tr >
                    <th>#</th>
                    <th>Username</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Done?</th>
                    <th>Edit</th>
                    <th>Delete</th>                
                </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                        this.state.todoEntity.map(
                            todo =>
                            <tr >
                                <td style = {texTdStyle}>{todo.id}</td>
                                <td style = {texTdStyle}>{todo.username}</td>
                                <td style = {texTdStyle}>{todo.description}</td>
                                <td style = {texTdStyle}>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                <td style = {texTdStyle}>{todo.status}</td>

                                <td><MDBBtn color="primary" onClick = {() => this.updateButton(todo.id)}>Edit</MDBBtn></td>
                                <td><MDBBtn color="danger" onClick = {() => this.deleteButton(todo.id)}>Delete</MDBBtn></td>
                            </tr>
                        )
                    }
                </MDBTableBody>
            </MDBTable>
            <MDBBtn color="success" onClick = {this.addButton}>Add</MDBBtn>
          </div>
        )
    }
}

export default TodoTable;