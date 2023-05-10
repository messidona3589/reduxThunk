import {produce} from "immer";
import { createAction, handleActions } from "redux-actions";

const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const REMOVE = "todos/REMOVE";
const TOGGLE = "todos/TOGGLE";

export const changeInput = createAction(CHANGE_INPUT, input=>input);

//초기 id값 1로 설정
let id = 1;
export const insert = createAction(INSERT, text => ({
  id : id++,
  text,
  done : false,
}));
export const remove = createAction(REMOVE, id => id);
export const toggle = createAction(TOGGLE, id => id);

const initialState = {
  input : "",
  todos : []
};

const todos = handleActions(
  {
    [CHANGE_INPUT] : (state, {payload : input}) => 
      produce(state, draft => {draft.input = input}),
    [INSERT] : (state, {payload : todo}) => 
      produce(state, draft => {draft.todos.push(todo)}),
    [TOGGLE] : (state, {payload : id}) => 
      produce(state, draft => {
        const todo = draft.todos.find(todo => todo.id===id);
        todo.done = !todo.done;
      }),
    [REMOVE] : (state, {payload : id}) => 
      produce(state, draft => {
      const index = draft.todos.findIndex(todo => todo.id === id);
      draft.todos.splice(index, 1);
    }),
  },
  initialState,
);

export default todos;