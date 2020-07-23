import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from 'react-icons/md';
import 'assets/css/TodoListItem.scss';
import classNames from 'classnames';

const TodoListItem = props => {
  const { todo, removeTodo, changeChecked } = props;
  const { text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div className={classNames('checkbox', { checked })} onClick={() => changeChecked(todo)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <button type="button" className="remove" onClick={() => removeTodo(todo)}>
        <MdRemoveCircleOutline />
      </button>
    </div>
  )
};

export default TodoListItem;