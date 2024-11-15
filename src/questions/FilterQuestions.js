import React from 'react'
import Card from '../components/ui/Card'
import classes from './FilterQuestions.module.css';

const FilterQuestions = (props) => {
 
    const dropDownHandler=(e)=>{
        props.onFilterChange(e.target.value);
        console.log(e.target.value);
    }
  return (
    <Card className={classes.controls}>
    <div className={classes.content}>
        <div className={classes.left}>
            <p>Filtered by</p>
        </div>
        <div className={classes.right}>
            <select value={props.selected} onChange={dropDownHandler}>
                {/* <option>---select---</option> */}
                <option value="javascript">javascript</option>
                <option value="reactjs">reactjs</option>
                <option value="angular">angular</option>
            </select>
        </div>
    </div>
</Card>
  )
}

export default FilterQuestions
