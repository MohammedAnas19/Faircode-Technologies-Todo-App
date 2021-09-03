import { todoConstants } from "./constants";

export const addTodo = (todo) => {
  return async (dispatch) => {
    dispatch({
      type: todoConstants.ADD_TODO_REQUEST,
      payload: todo,
    });
  };
};
// export const getTodo = () => {
//     return async (dispatch) => {
//       dispatch({
//         type: todoConstants.ADD_TODO_REQUEST,
//         payload: {
//         },
//       });
//     };
//   };
export const completeTodo = (id) => {
  return async (dispatch) => {
    dispatch({
      type: todoConstants.COMPLETE_TODO_REQUEST,
      payload: {
        id,
      },
    });
  };
};
// export const getCompletedTodo = () => {
//     return async (dispatch) => {
//         dispatch({
//         type: todoConstants.COMPLETE_TODO_REQUEST,
//         payload: {
//         },
//         });
//     };
// };
