import { ActionTypes } from "../constants/ActionTypes";


export const addQuestion =(question)=>{
    return{
        type:ActionTypes.ADD_QUESTION,
        payload:question
    }
}

export const wrongQuestion =(wrongQuestion)=>{
    return{
        type:ActionTypes.WRONG_QUESTION,
        payload:wrongQuestion
    }
}

export const removeWrongQuestion =(removeWrongQuestion)=>{
    return{
        type:ActionTypes.REMOVE_WRONG_QUESTION,
        payload:removeWrongQuestion
    }
}

export const removeAllWrongQuestion =(removeAllWrongQuestion)=>{
    return{
        type:ActionTypes.REMOVEALL_WRONG_QUESTION,
        payload:removeAllWrongQuestion
    }
}

export const isSubmited =(status)=>{
    return{
        type:ActionTypes.IS_SUBMITED,
        payload:status
    }
}