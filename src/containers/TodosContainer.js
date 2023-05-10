import React from "react";
import { useSelector } from "react-redux";
import Todos from "../components/Todos"
import { insert, toggle, remove, changeInput } from "../modules/todos";
import useActions from "../lib/useActions";

const TodosContainer = () => {
  const {input, todos} = useSelector(({todos}) => ({
    input : todos.input,
    todos : todos.todos
  }));
  //액션생성 함수를 액션을 디스패치하는 함수로 바꾸어줌
  const [onChangeInput, onInsert, onToggle, onRemove] = useActions([changeInput, insert, toggle, remove], []);

  return <Todos input={input} todos={todos} onChangeInput={onChangeInput} onInsert={onInsert} onToggle={onToggle} onRemove={onRemove}/>;
};

export default React.memo(TodosContainer);