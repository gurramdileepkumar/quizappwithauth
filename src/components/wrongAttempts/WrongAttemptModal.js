import React from 'react';
import  ReactDOM  from 'react-dom';
import Button from '../ui/Button';
import classes from './WrongAttemptModal.module.css';
import { useSelector,useDispatch } from 'react-redux';
import WrongQuestionItem from './WrongQuestionItem';
import { removeAllWrongQuestion } from '../../redux/actions/QuestionActions';

const Backdrop=(props)=>{
   return <div className={classes.backdrop} onClick={props.onClick}></div>
}
const ModalOverlay=(props)=>{
    const { wrongQuestions }=useSelector(state=>state.questions);
    const dispatch=useDispatch();
    const removeAllWrongQuestionHandler=()=>{
        dispatch(removeAllWrongQuestion([]));
        props.onConfirm();
    }
   
    return <div className={classes.modal}>
        <div className={classes.content}>
         <WrongQuestionItem />
        <Button onClick={props.onConfirm}>Close</Button>
        {wrongQuestions?.length > 0 && (<Button className={classes.removeAllBtn} onClick={removeAllWrongQuestionHandler}>clear</Button>)}
        </div>
    </div>
}
const WrongAttemptModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop  onClick={props.onCartClose}/>,(document.getElementById('backdrop-root')))}
      {ReactDOM.createPortal(<ModalOverlay onConfirm={props.onCartClose}>{props.children}</ModalOverlay>,(document.getElementById("overlay-root")))}
    </React.Fragment>
  )
}

export default WrongAttemptModal
