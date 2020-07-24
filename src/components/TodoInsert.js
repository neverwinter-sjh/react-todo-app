import React, { useState, useCallback, useRef } from 'react';
import { MdAdd } from 'react-icons/md';
import 'assets/css/TodoInsert.scss';

const TodoInsert = props => {  
  const { insertTodo } = props;
  const [value, setValue] = useState('');  
  const input = useRef(null);

  const onChange = useCallback(e => {        
    setValue(e.target.value);
    e.preventDefault();
  }, []);

  const onClick = useCallback(e => {                
    insertTodo(value.trim());
    setValue('');
    input.current.focus();
    e.preventDefault();    
  }, [insertTodo, value]);

  return (
    <div className="TodoInsert">
      <input placeholder="할 일을 입력하세요." ref={input} value={value} onChange={onChange} />
      <button type="button" onClick={onClick}>
        <MdAdd />
      </button>
    </div>
  )
};

export default TodoInsert;