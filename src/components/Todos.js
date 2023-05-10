import React from "react";

const TodoItem = ({todo, onToggle, onRemove}) => {
  return(
    <div>
      <input type="checkbox" checked={todo.done} onClick={() => onToggle(todo.id)} readOnly={true}/>
      <span style={{textDecoration : todo.done ? "line-through" : "none"}}>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

const Todos = ({onToggle, onInsert, onRemove, input, todos, onChangeInput}) => {
  const onSubmit = e => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  };
  const onChange = e => onChangeInput(e.target.value);

  return(
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={input} onChange={onChange}/>
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map(todo => (<TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove}/>))}
      </div>
    </div>
  );
};

export default Todos;