import React,{ useState } from 'react'
import Card from '../components/ui/Card'
import QuestionItem from './QuestionItem';
import classes from './Questions.module.css';
import { useSelector,useDispatch } from 'react-redux/es/exports';
import FilterQuestions from './FilterQuestions';
import Button from '../components/ui/Button';
import ScoreModal from '../components/scoreModal/ScoreModal';
import { isSubmited } from '../redux/actions/QuestionActions';


const Questions = (props) => {
  const [enteredCatagory,setEnteredCatagory]=useState("reactjs");
  const dispatch=useDispatch();
  const [score,setScore]= useState(0)
  const [wrongScore,setWrongScore]=useState(0);
  const [show,setShow]=useState(false);
  // let scoreCount=0;
  const answerSubmitHandler=(ans,answer)=>{
    console.log("answer clicked")
    console.log(answer);
    console.log(ans);
    if(answer === ans ){
      setScore(
         score+1
        );
      // alert(scoreCount)

    }
    else{
       setWrongScore(wrongScore+1);
    }
   
  }
  const scoreSubmitHandler=()=>{
    // alert(score);
    setShow(true);
    // props.onsubHand();
    dispatch(isSubmited(true));
    console.log(wrongScore);
  }
  const errorHandler=()=>{
    setShow(null);
 }

  const { questions }=useSelector(state=>state.questions);
  console.log(questions);
  


  const newFilteredQuestion=(newQuestion)=>{
    setEnteredCatagory(newQuestion);
  }
  let filterQuestion=questions.filter((item)=>{
    return item.catagory === enteredCatagory;
   })
  const countOfQuestions=filterQuestion.length;


  return (
    <Card className={classes.home}>
        {show && (<ScoreModal  title="Your score"  
                 message={`Your score:${score} out of ${countOfQuestions}`} 
                 onConfirm={errorHandler} 
                 wrongAns={`wrong Attempts:${wrongScore}`}
                 />
         )}
      <FilterQuestions selected={enteredCatagory} onFilterChange={newFilteredQuestion}/>
      {filterQuestion.length === 0 && (
      <Card className={classes.noQ}>
          <p>No Questions Here</p>
      </Card>
      )}

      {filterQuestion.map((qitem,index)=>{
        return    <QuestionItem  
                    key={qitem.id}  
                    questions={qitem} 
                    index={index+1}
                    totalQuestions={countOfQuestions}
                   answerSubmit={answerSubmitHandler}
                    />
      })}
      
      <Button onClick={scoreSubmitHandler}>Submit</Button>
    </Card>
  )
}

export default Questions
