import React from 'react';
import TodoTemaplte from 'components/TodoTemplate';
import TodoInsert from 'components/TodoInsert';
import TodoList from 'components/TodoList';

function App() {  
  return (
    <TodoTemaplte>
      <TodoInsert />
      <TodoList />
    </TodoTemaplte>
  );
}

export default App;
