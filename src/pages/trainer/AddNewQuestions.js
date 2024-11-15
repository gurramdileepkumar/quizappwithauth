import React,{ useState } from 'react'
import Button from '../../components/ui/Button';
import AddNewQuestionForm from './AddNewQuestionForm'

const AddNewQuestions = (props) => {
    const [isEditable,setIsEditable]= useState(false);
    const startEditingHandler=()=>{
        setIsEditable(true);
      }
      const stopEditingHandler=()=>{
        setIsEditable(false);
      }
      const saveQuestionDataHandler=(entryQuestion,index)=>{
        const questionData={
         ...entryQuestion,
         id:Math.floor(Math.random()*100).toString(),
        };
        // props.onAddData(questionData);
        console.log(questionData);
        setIsEditable(false);
}
  return (
    <React.Fragment>
        
        {!isEditable && (<Button onClick={startEditingHandler}>Add Question</Button>)}
        {isEditable && (<AddNewQuestionForm onCancel={stopEditingHandler} onSaveQuestionData={saveQuestionDataHandler}/>)}
   </React.Fragment>
  )
}

export default AddNewQuestions
