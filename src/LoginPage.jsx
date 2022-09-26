/*Estilos*/
import logouser from './assets/images/User.png';
import { singInWithGoogle } from './firebase/providers';
import useAuth from './hook/useAuth';
import './assets/css/login.css';



export const LoginPage = () => {
  const {login} = useAuth();

  const onGoogleSingIn = async () =>{
    const result = await singInWithGoogle();
    login(result);
  }
  
  return (
    <>
      <div className="container-log">
        <div className="login-box">
          <h1>Bienvenido</h1>
          <h3></h3>
          <div className="logo">
            <div>
              <img src={logouser}/>
            </div>
            <div>
              <button onClick={onGoogleSingIn}>
                Iniciar sesion 
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

