import React from 'react'
import Card from '../components/ui/Card'
import classes from './QuestionItem.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { wrongQuestion } from '../redux/actions/QuestionActions';

const QuestionItem = (props) => {
    const dispatch=useDispatch();
    const wrongQuestions=useSelector(state=>state.questions);
    const { q,a,b,c,d,answer }=props.questions;
    const count =props.index;


    console.log(props.questions)

    const answerHandler=(ans)=>{
        props.answerSubmit(ans,answer);
        if(ans !== answer){
        //   console.log(props.question);
          dispatch(wrongQuestion({...props.questions,select:ans}));
        } 
      }
      console.log(wrongQuestions);
  return (
   <Card className={classes.main} key={props.index}>
     <div className={classes.controls}>
        <div>
          <p>{q}</p>
        </div>
        <div>
          <input type="radio" name={answer} id="a"  onClick={()=>answerHandler(a)}/>
          <label htmlFor="a">{a}</label>
        </div>
        <div>
           <input type="radio" name={answer} id="b" onClick={()=>answerHandler(b)}/>
          <label htmlFor="b">{b}</label>
        </div>
        <div>
          <input type="radio" name={answer} id="c" onClick={()=>answerHandler(c)}/>
          <label htmlFor="c">{c}</label>
        </div>
        <div>
          <input type="radio" name={answer} id="d" onClick={()=>answerHandler(d)} />
          <label htmlFor="d">{d}</label>
        </div>
        <div className={classes.countQuestions}>
          <span>{count} of {props.totalQuestions}</span>
        </div>
    </div>
   </Card>
  )
}

export default QuestionItem
