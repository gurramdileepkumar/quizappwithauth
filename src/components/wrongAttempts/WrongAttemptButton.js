import React from 'react'
import classes from './WrongAttemptButton.module.css';
import { useSelector } from 'react-redux/es/exports';

const WrongAttemptButton = (props) => {
    const  { wrongQuestions,isSubmited } =useSelector(state=>state.questions);
    // console.log(wrongAttempts);
  const numberOfWrongAttempts=wrongQuestions?.length?wrongQuestions.length:0;
  return (
    <button disabled={!isSubmited?true:false} className={`${classes.button} ${classes.bump} ${classes.btn}`} onClick={props.onClick}>
    <span>
    <span>Wrong Attempts</span>
    <span className={classes.badge}>{numberOfWrongAttempts}</span>
    </span>
  </button>
  )
}

export default WrongAttemptButton
