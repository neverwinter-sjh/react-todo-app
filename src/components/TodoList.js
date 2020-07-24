import React from 'react';
import TodoListItem from 'components/TodoListItem';
import 'assets/css/TodoList.scss';

const TodoList = props => {
  const { todos, removeTodo, changeChecked } = props;

  return (
    <div className="TodoList">
      {todos.map(todo => 
        <TodoListItem 
          key={todo.text} 
          todo={todo} 
          removeTodo={todo => removeTodo(todo)} 
          changeChecked={todo => changeChecked(todo)}
        />
      )}
    </div>
  )
};

export default React.memo(TodoList);