import React from 'react'

export default class TodoList extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      input: '',
      todos: [{
        value: '',
        
      }]
    };
    this.addTodo = this.addTodo.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  
  addTodo(){
    const newTodo = {
      value: this.state.input,
      
    };

    this.setState(state => ({
      todos: [ ...state.todos, newTodo],
      input: ''
    }));
  }

  handleInput(evt){
    if(evt.nativeEvent.key ==="Enter"){
      this.addTodo();
    }else{
      this.setState({
        input: evt.target.value
      });
    }
  }

  removeTodo(id){

    this.setState(state => {
      return{
        todos: state.todos.map(todo => {
          if(todo.id !== id){
            return todo;
          } else {
            return { ...todo, deleted: true }
          }
        })
      };
    });
  }

  render(){
    return(
      <div className="todo-list">
        <h1>Todo List</h1>

        { this.state.todos.map(t => <Todo key={t.id} {...t} onClick={()=>this.removeTodo(t.id)}/>)}

        <div className="controls">
          <input type="text" 
            value={this.state.input} 
            onChange={this.handleInput} 
            onKeyDown={this.handleInput}  
             />
          <button onClick={this.addTodo}>Add</button>
        </div>
      </div>
    )
  }  
}

const Todo = ({value, onClick, deleted}) => (
  <div className={`todo ${deleted? 'deleted' : ''}`} >
    <button className="remove" onClick={onClick}>delete</button>
    <div>{value}</div>

  </div>
);

