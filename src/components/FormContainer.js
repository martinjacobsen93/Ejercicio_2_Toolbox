import { useState } from "react";
import LoginForm from "./LoginForm";
import usuarios from "../usuarios/usuarios.json"

const FormContainer = () => {

    const [user, setUser] = useState({username:""});
    const [error, setError] = useState("");

    const login = details => {
        const userFound = usuarios.find(
        user => user.username === details.username && details.password === user.password);

        if (userFound) {
        setUser({
            username: details.username
        });
        setTimeout(() => {
            window.location.replace(`https://dummy.tbxnet.com/${userFound.username}`)
        }, 2000);
        } else {
        setError("El usuario o contraseña es incorrecto");
        }
    };

  return (
    <div className="App">
      {user.username !== "" ? (
        <div className="welcome">
          <h2>Hola <span>{user.username}!!</span></h2>
        </div>
      ) : <LoginForm login={login} error={error}/>}
    </div>
  )
}

export default FormContainer