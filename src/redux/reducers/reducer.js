import { ADD_TASK,EDIT,CHECK, FILTER} from "../actionTypes";

const initialState = {
  tasks: [
    { description: "Shopping", id: 0, isDone: false },
    {description: "Watching TV", id: 1, isDone: false }
  ],  
  filter: "ALL"

};

const Tasks = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: state.tasks.concat(action.payload)
      };
      case EDIT:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === action.payload.ID? { ...el, description: action.payload.newTask } : el
        )
      };
      case CHECK:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === action.payload? { ...el, isDone: !el.isDone } : el
        ),
      };
      case FILTER:
        return{
        
          ...state, 
          filter:action.payload}
        
        

        
    default:
      return state;
  }
};
export default Tasks;


