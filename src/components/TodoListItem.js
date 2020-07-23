import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdChekcbox,
  MdRemoveCircleOutline
} from 'react-icons/md';
import 'assets/css/TodoListItem.scss';

const TodoListItem = () => {
  return (
    <div className="TodoListItem">
      <div className="checkbox">
        <MdCheckBoxOutlineBlank />
        <div className="text">할 일</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  )
};

export default TodoListItem;