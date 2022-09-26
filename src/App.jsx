import { useEffect, useMemo, useState } from 'react'
import { LoginPage } from './LoginPage'
import AuthContext from './context/AuthContext';
import { Usersesion } from './Usersesion';

export const App = () => {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    setAuth(null);
  }, [])

  const login = (user) =>{
    if (user.ok){
      console.log(user);
      setAuth({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        id: user.uid,
      });
    } 
  }


  const authData = useMemo(
    () => ({
      auth,
      login,
      logout: ()=> null,
    }), 
    [auth]
  );
  
  if(auth === undefined) return null;
  
  return (
    <AuthContext.Provider value={authData}>
      {auth ? <Usersesion/> : <LoginPage/>}
    </AuthContext.Provider>
  )
}




