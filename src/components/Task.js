import { useState } from "react";
import { checkHandler,  edit_Task } from "../redux/action";
import { useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';

import React from "react";
const Task = ({ task }) => {
    const dispatch=useDispatch()
    const [edit, setEdit] = useState("");
    const editTask = () => {
        dispatch(edit_Task(task.id, edit));
      };
      const checkTask = () => {
        dispatch(checkHandler(task.id));
      };

    return(
        <div>
           
           <div class="container py-5 h-100">
           <div class="row d-flex justify-content-center align-items-center h-100">
           <div class="col">
           <Table striped bordered hover>
            <tbody>
            <tr>
           <td> <p class="lead fw-normal mb-0">{task.description}</p></td>
           <td><i><button onClick={editTask} className="btn btn-primary btn-sm">EDIT</button></i></td>
               <td> < input onChange={(e) => setEdit(e.target.value)}></input></td>
                
               <td><i><button onClick={checkTask} className="btn btn-primary btn-sm">check</button></i></td>
            </tr>
            </tbody>
            </Table>
            
            </div>
          </div>
          </div>
        </div>
    )
  
};
export default Task;
