import React from 'react';
import TodoListItem from 'components/TodoListItem';
import 'assets/css/TodoList.scss';

const TodoList = () => {
  return (
    <div className="TodoList">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  )
};

export default TodoList;