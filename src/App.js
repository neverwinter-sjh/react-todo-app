import React, { useState, useCallback, useEffect } from 'react';
import TodoTemaplte from 'components/TodoTemplate';
import TodoInsert from 'components/TodoInsert';
import TodoList from 'components/TodoList';
import _ from 'lodash';

const App = () => {

  const [todos, setTodos] = useState([]);

  const insertTodo = useCallback(text => {
    const item = _.find(todos, item => item.text === text);
    if (item) {
      alert('이미 추가된 항목입니다.');
    } else {
      const nextId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;    
      const todo = {
        id: nextId,
        text: text,
        checked: false
      };              
      setTodos(todos.concat(todo));
    }    
  }, [todos]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const changeChecked = useCallback(todo => {    
    setTodos(
      todos.map(item => {
        return item.text === todo.text ? { ...item, checked: !item.checked } : item;
      })
    );
  }, [todos]);

  const removeTodo = useCallback(todo => {        
    setTodos(todos.filter(item => item.text !== todo.text));    
  }, [todos]);

  return (
    <TodoTemaplte>
      <TodoInsert insertTodo={value => insertTodo(value)} />
      <TodoList 
        todos={todos} 
        removeTodo={todo => removeTodo(todo)} 
        changeChecked={todo => changeChecked(todo)}
      />
    </TodoTemaplte>
  );
}

export default App;
