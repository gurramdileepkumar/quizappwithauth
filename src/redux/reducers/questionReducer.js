import { ActionTypes } from "../constants/ActionTypes";


const intialState={
    questions:[
        {
            id:1,
            q:"what is react js ?",
            a:"Js-library",
            b:"Js-framework",
            c:"Javascript language",
            d:"none of the above",
            answer:"Js-library",
            catagory:"reactjs"
          },
          {
            id:2,
            q:"Which of the following command is used to Install create-react-app?",
            a:"npm install create-react-app",
            b:"npm install -f create-react-app",
            c:"npm install -g create-react-app",
            d:" install -g create-react-app",
            answer:"npm install -g create-react-app",
            catagory:"reactjs"
          },
          {
            id:3,
            q:"Which of the following is correct about prop in react?",
            a:"Can be changed inside another component",
            b:"Can be changed inside the component",
            c:"Cannot be changed in the component",
            d:"All of the mentioned",
            answer:"Cannot be changed in the component",
            catagory:"reactjs"
          },
          {
            id:4,
            q:"React.js is written in which of the following language?",
            a:"c",
            b:"c++",
            c:"Javascript",
            d:"Java",
            answer:"Javascript",
            catagory:"reactjs"
          },
          {
            id:5,
            q:"Which of the following acts as the input of a class-based component?",
            a:"Class",
            b:"Props",
            c:" Factory",
            d:"none of the above",
            answer:"Class",
            catagory:"reactjs"
          },
          {
            id:6,
            q:"Javascript is an _______ language?",
            a:"Object-oriented",
            b:"Object-based",
            c:"Procedural",
            d:"none of the above",
            answer:"Object-oriented",
            catagory:"javascript"
          },
          {
            id:7,
            q:"Which of the following keywords is used to define a variable in Javascript?",
            a:"Var",
            b:"Let",
            c:"A & B",
            d:"none of the above",
            answer:"A & B",
            catagory:"javascript"
          },
          {
            id:8,
            q:"How can a datatype be declared to be a constant type?",
            a:"const",
            b:"Var",
            c:"Let",
            d:"Constant",
            answer:"const",
            catagory:"javascript"
          },
          {
            id:9,
            q:"What is the use of the <noscript> tag in Javascript?",
            a:"The contents are displayed by non-js-based browsers",
            b:"Clear the all cookies and cache",
            c:"A & B",
            d:"none of the above",
            answer:"The contents are displayed by non-js-based browsers",
            catagory:"javascript"
          },
          {
            id:10,
            q:"When an operator’s value is NULL, the typeof returned by the unary operator is:",
            a:"Boolean",
            b:"Undefined",
            c:"Object",
            d:"Integer",
            answer:"Object",
            catagory:"javascript"
          }
    ],
    wrongQuestions:[],
    isSubmited:false,
}

export const questionReducer=(state=intialState,action)=>{
    switch (action.type){
        //  case ActionTypes.GET_QUESTION:
        //     return {...state, questions:action.payload};
         case ActionTypes.ADD_QUESTION:
            let newQuestion = [action.payload,...state.questions]
                return {...state, questions:newQuestion};
         case ActionTypes.WRONG_QUESTION:
            let wrongQuestion =[action.payload,...state.wrongQuestions]
                return {...state, wrongQuestions:wrongQuestion};
           case ActionTypes.REMOVE_WRONG_QUESTION:
                  let removeWrongQuestion =state.wrongQuestions.filter((item)=>item.id !== action.payload)
                      return {...state, wrongQuestions:removeWrongQuestion};
             case ActionTypes.REMOVEALL_WRONG_QUESTION:
                      return {...state, wrongQuestions:action.payload};
            case ActionTypes.IS_SUBMITED:
              return{...state,isSubmited:action.payload};
            default:
                return state;
    }
}

export default questionReducer;