import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoTemaplte from 'components/TodoTemplate';
import TodoInsert from 'components/TodoInsert';
import TodoList from 'components/TodoList';
import { insert, toggle, remove } from 'modules/todos';
import _ from 'lodash';

const TodoContainer = () => {

  const { todos } = useSelector(({ todos }) => ({    
    todos: todos.todos
  }));  
  const dispatch = useDispatch(); 
  const onInsert = useCallback(text => {    
    if (text === '') {
      alert('내용을 입력해 주세요.');
      return;
    }
    const sameItem = _.find(todos, todo => todo.text === text);        
    if (sameItem) {
      alert('이미 추가된 항목입니다.');
    } else {
      return dispatch(insert(text));
    }
  }, [dispatch, todos]);
  const onToggle = useCallback(todo => dispatch(toggle(todo)), [dispatch]);
  const onRemove = useCallback(todo => dispatch(remove(todo)), [dispatch]);

  return (
    <TodoTemaplte>
      <TodoInsert insertTodo={onInsert} />
      <TodoList 
        todos={todos} 
        removeTodo={onRemove} 
        changeChecked={onToggle}
      />
    </TodoTemaplte>
  );
}

export default TodoContainer;
