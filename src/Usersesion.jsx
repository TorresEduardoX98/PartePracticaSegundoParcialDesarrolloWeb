import useAuth from "./hook/useAuth";
import './assets/css/usersesion.css';

export const Usersesion = () => {
  const {auth, logout} = useAuth();
  const Email = auth.email; 
  const Name = auth.name;
  const Photo = auth.photo;

  return (
    <div className="container-log">
    <div className="containersesion">
      <div className="User">
        <h1>{`BIENVENIDO`}</h1>
        <h2>{`${Name}`}</h2>
        <div>
          <img src={Photo}/>
          
        </div>
        <div>
          <p><h3>{Email}</h3></p>
          <h2>{'5090-19-1779'}</h2>
          <a href="javascript:location.reload()">
          <button>⠀⠀⠀⠀CERRAR SESIÓN⠀⠀⠀⠀</button>
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}
