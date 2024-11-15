import React from 'react';
import { useSelector,useDispatch } from 'react-redux/es/exports';
import Card from '../ui/Card';
import classes from './WrongQuestionItem.module.css';
import { removeWrongQuestion } from '../../redux/actions/QuestionActions';


const WrongQuestionItem = (props) => {
    const { wrongQuestions }=useSelector(state=>state.questions);
    const dispatch=useDispatch()
    console.log(wrongQuestions);
    const removeQuestions=(id)=>{
    //  wrongAttempts.removeQuestions(id)
       dispatch(removeWrongQuestion(id))
    }
  return (
    <>   
        
        {wrongQuestions.length > 0 ? wrongQuestions.map((item)=>{
          console.log(item.select);
            return(
            <Card className={classes.qTag} key={item.id}>
                <div key={item.id}>
                <div className={classes.m}>
                <div className={classes.question}>{item.q}</div>
                <div className={classes.trash} onClick={()=>removeQuestions(item.id)}><i class="fa fa-trash" aria-hidden="true"></i></div>
                </div>
                <div className={item.a === item.answer ? classes.rightQ:item.select === item.a?classes.wrongQ:classes.intialQ}>
                  {item.a}
                </div>
                <div className={item.b === item.answer?classes.rightQ:item.select === item.b?classes.wrongQ:classes.intialQ}
                >
                  {item.b}
                </div>
                <div className={item.c === item.answer?classes.rightQ:item.select === item.c?classes.wrongQ:classes.intialQ}
                >
                  {item.c}
                </div>
                <div className={item.d === item.answer?classes.rightQ:item.select === item.d?classes.wrongQ:classes.intialQ}
                >
                  {item.d}
                </div>
                <hr/>
                </div>
            </Card>
            )
        }):
        <p className={classes.cong}>Congratulations...No Wrong Attempts</p>
        }
    </>
  )
}

export default WrongQuestionItem
