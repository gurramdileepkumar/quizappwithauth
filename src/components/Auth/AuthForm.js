import { useState,useRef,useContext, createContext } from 'react';
import classes from './AuthForm.module.css';
import AuthContext from '../../store/AuthContext';
import { useHistory } from 'react-router-dom';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading,setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);
 const emailRef = useRef();
 const passwordRef = useRef();
 const history= useHistory();


 
  const switchAuthModeHandler = (e) => {
    setIsLogin((prevState) => !prevState);

  };
  const submitHandler=(e)=>{
    e.preventDefault();
    const enteredEmail=emailRef.current.value;
    const enteredPassword=passwordRef.current.value;

    // console.log(emailRef.current.value);
    // const resultRole =enteredEmail.slice(0, email.indexOf("@"));
    // console.log(passwordRef.current.value);
    let url;
    if(isLogin){
       //logic for signin
       url=
       "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAG5GRndLRfzpgj9a7IMZTx0a9Z_O8bmpY";
    }
    else{
      //logic for signup(register)
      url=
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAG5GRndLRfzpgj9a7IMZTx0a9Z_O8bmpY";
    }
      fetch(
        url,
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: { "Content-Type": "application/json" },
        }
      ).then((res) => {
        setIsLoading(false);
        if(res.ok){
        //res is ok :show success message, redirecting to some other page
        return res.json();
        }
        else{
          return res.json().then((data)=>{
            let errorMessage="Authentication Failed";
            // if(data && data.error && data.error.message){
            //   errorMessage = data.error.message;
            // alert(errorMessage);
            // }
            throw new Error(errorMessage);
            // setIsLoading(false);
          })
        }
    }).then((data)=>{
      console.log(data);
      console.log("----data----");
      authCtx.login(data.idToken);
      history.replace("/");


    }).catch((err)=>{
      alert(err.message)
    })
  }


  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required  ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required  ref={passwordRef}/>
        </div>
        <div className={classes.actions}>
          {!isLoading  && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Loading...</p>} 
           <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
