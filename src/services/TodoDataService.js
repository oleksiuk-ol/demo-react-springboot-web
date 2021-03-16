import axios from 'axios'
export const JPA_API_URL = 'http://localhost:8090/demo'

class TodoDataService{

    getAllTodos() {
        return axios.get(`${JPA_API_URL}/todo`);        
    }

    getTodo(id){
        return axios.get(`${JPA_API_URL}/todo/${id}`);      
    }

    createTodo(todo) {
        return axios.post(`${JPA_API_URL}/todo`, todo);        
    }

    deleteTodo(id) {
        return axios.delete(`${JPA_API_URL}/todo/${id}`);        
    }

    updateTodo(id, todo) {
        return axios.put(`${JPA_API_URL}/todo/${id}`, todo);        
    }

}

export default new TodoDataService()