export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
    return [...state, {id: Date.now(), todo: action.todo, completed: false}];
    case 'TOGGLE_COMPLETED':
    return state.map(todo => {
      return todo.id === action.id ? {...todo, completed : !todo.completed} : todo;
    })
  default: 
    return state;
  }
}