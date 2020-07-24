const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

let todoId = 0;

export const insert = text => ({
  type: INSERT,
  todo: {
    id: todoId++,
    text,
    checked: false
  }
});

export const toggle = todo => ({
  type: TOGGLE,
  id: todo.id
});

export const remove = todo => ({
  type: REMOVE,
  id: todo.id
});

const initialState = {  
  todos: []
};

function todos(state = initialState, action) {
  switch(action.type) {   
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo)
      };
    case TOGGLE:
      return {        
        ...state,
        todos: state.todos.map(todo => 
          todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
        )
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      }
  }
  return state;
}

export default todos;
