import React from 'react';
import {connect} from 'react-redux';
import ToDo from '../components/ToDo';
import {toggleCompleted} from '../actions';

const ToDoList = ({todos, toggleCompleted}) => {
  console.log(todos);
  const displayTodos = todos.map(todo => {
    return (
      <ToDo
      {...todo}
      key={todo.id}
      toggleCompleted={toggleCompleted}
      />
    )
  })

  return (
    <ul>
    {displayTodos}
    </ul>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
}); 

const mapDispatchToProps = dispatch => ({
  toggleCompleted: id => dispatch(toggleCompleted(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);