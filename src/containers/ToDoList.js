import React from 'react';
import {connect} from 'react-redux';
import ToDo from '../components/ToDo';

const ToDoList = ({todos}) => {
  console.log(todos);
  const displayTodos = todos.map(todo => {
    return (
      <todo
      {...todo}
      key={todo.id}
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

export default connect(mapStateToProps)(ToDoList);