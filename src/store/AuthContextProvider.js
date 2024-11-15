import React,{ useState } from 'react';

import AuthContext from './AuthContext';

const AuthContextProvider=(props)=>{
   const [token,setToken]=useState(null);

   const userIsLoggedIn= !token;
   const loginHandler=(token)=>{
    setToken(token);
   }
   const logoutHandler=()=>{
    setToken(null);
   }
    const contextValue={
        token:token,
        isLoggedIn:userIsLoggedIn,
        logout:logoutHandler,
        login:loginHandler
    }

    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

