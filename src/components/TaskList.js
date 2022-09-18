import React from "react";
import { useSelector } from "react-redux";

import Task from "./Task";



const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const Filter=useSelector((state)=>state.filter)
  
 

  const FilteredList=()=>
    {if (Filter=="DONE"){
      return tasks.filter(el=>  el.isDone===true )
    }
    else if(Filter=="UNDONE"){
      return tasks.filter(el=>  el.isDone===false )

    }
    return tasks===null

    }
  
  return (
    <div className="Container">
      

      <div className="my-4">
        <ul id="myUl">
          {tasks.map((el, i) => (
            <Task task={el} key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
