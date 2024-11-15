import React,{ useContext, useState } from "react"
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import WrongAttemptButton from "../wrongAttempts/WrongAttemptButton";
import WrongAttemptModal from "../wrongAttempts/WrongAttemptModal";
import { useDispatch } from "react-redux/es/exports";
import { isSubmited,removeAllWrongQuestion } from "../../redux/actions/QuestionActions";

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const [showWrongModal,setShowWrongModal]=useState(false);
  const dispatch=useDispatch();
  const authCtx=useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const history=useHistory();
  const logoutHandler=()=>{
    authCtx.logout();
    dispatch(isSubmited(false));
    dispatch(removeAllWrongQuestion([]));
    history.replace("/auth")
  }
  const showWrongModalHandler=()=>{
    setShowWrongModal(true);
  }
  const closeWrongModalHandler=()=>{
    setShowWrongModal(false);
  }
  return (
    <React.Fragment>
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>Quiz App</div>
      </Link>
      <nav>
        <ul>
         {isLoggedIn && 
          ( <li>
            <Link to='/auth'>Login</Link>
          </li>
          )
         }
          {!isLoggedIn && (
            <li>
            <Link to='/profile'>Profile</Link>
          </li>
          )}
          {!isLoggedIn && (
            <li>
            <Link to='/trainee'>Trainee</Link>
          </li>
          )}
           {!isLoggedIn && (
            <li>
            <Link to='/trainer'>Trainer</Link>
          </li>
          )}
          {!isLoggedIn && (
            <li>
            <WrongAttemptButton onClick={showWrongModalHandler}/>
          </li>
          )}

          {!isLoggedIn && (
            <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
          )}
        </ul>
      </nav>
    </header>
    {showWrongModal && (<WrongAttemptModal  onCartClose={closeWrongModalHandler}/>)}
    </React.Fragment>
  );
};

export default MainNavigation;
