import { ADD_TASK } from "./actionTypes";
import { EDIT ,CHECK,FILTER,FILTER_TAB} from "./actionTypes";

export const addTasks = (payload) => {
  return {
    type: ADD_TASK,
    payload
  };
};
export const edit_Task = (ID,newTask) => {
    return {
    type: EDIT,
    payload:{ID,newTask}
    };
  };
  export const checkHandler=(ID)=>{
    return {
        type:CHECK,
        payload: ID
    }
}
export const UpdateFilterStatus = (choix)=> ({
  type: FILTER,
  payload:choix
});

