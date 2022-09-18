import { useState } from "react";
import { useDispatch} from "react-redux";
import { addTasks } from "../redux/action";
import VisibilityFilter from "./VisibilityFilter";


const Add = () => {
  const dispatch = useDispatch();
  const id = Math.random()
  const [input, setInput] = useState("");

  

  return (
    <div>
      <div class="d-flex flex-row align-items-center">
      <div class="container py-5 h-100">
      
      <input
        type="text"
        id="myInput"
        onChange={(e) => setInput(e.target.value)}
        value={input}
         class="form-control form-control-lg" 
        placeholder="Add new..."
      />
      </div>

      <button class="btn btn-primary"
                
        onClick={() => {
            dispatch(addTasks({ id, text: input, complete: false }))
            
          setInput("");
        }}
      >
        add
      </button>
      <VisibilityFilter/>

      </div>

      
      </div>
  );
};
export default Add;
