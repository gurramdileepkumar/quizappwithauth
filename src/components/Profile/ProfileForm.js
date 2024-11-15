import React,{ useContext, useRef } from "react";
import classes from './ProfileForm.module.css';
import AuthContext from "../../store/AuthContext";
import { useHistory } from "react-router-dom";

const ProfileForm = () => {
  const newPasswordInputRef=useRef();
  const authCtx=useContext(AuthContext);
  const history= useHistory();
  const onSubmitHandler=(e)=>{
    e.preventDefault();
    const   enteredNewPassword=newPasswordInputRef.current.value;
    // console.log(newPasswordInputRef.current.value);
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAG5GRndLRfzpgj9a7IMZTx0a9Z_O8bmpY",
    {
      method: "POST",
      body: JSON.stringify({
        idToken:authCtx.token,
        password: enteredNewPassword,
        returnSecureToken:false,
      }),
      headers: { "Content-Type": "application/json" },
    }
    ).then((res)=>{
      //success case
      console.log(res);
      //redirect on home page
      history.replace("/");
    })
  }
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password'  ref={newPasswordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
