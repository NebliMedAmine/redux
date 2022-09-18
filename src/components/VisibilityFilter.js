import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { UpdateFilterStatus } from "../redux/action";

const VisibilityFilter=()=>  {
  const Filter=useSelector((state)=>state.filter)
  const dispatch=useDispatch()
const updateFilter=(el)=>{
   dispatch(UpdateFilterStatus(el.target.value))
}
console.log(updateFilter)
    return (
    <div className="col-sm-3">
    <label className="visually-hidden" htmlFor="specificSizeSelect">Preference</label>
    <select className="form-select" id="specificSizeSelect"  value={Filter} onChange={updateFilter}>
      <option value="1" >ALL</option>
      <option value="2" >DONE</option>
      <option value="3" >UNDONE</option>
    </select>
  </div>
    )
}

export default VisibilityFilter


