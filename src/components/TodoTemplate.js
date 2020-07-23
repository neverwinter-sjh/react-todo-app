import React from 'react';
import 'assets/css/TodoTemplate.scss';

const TodoTemaplte = props => {
  const { children } = props;

  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  )
};

export default TodoTemaplte;