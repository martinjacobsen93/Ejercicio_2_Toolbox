import React, { useState } from 'react'

const LoginForm = ({login, error}) => {

    const [values, setValues] = useState({
        username: "", 
        password: ""
    });

    const handleInputChange = ({ target }) => {

        setValues({
            ...values, 
            [ target.name ]: target.value
        });

    }

    const submitHandler = e => {
        e.preventDefault();
        login(values);
    }

  return (
    <form onSubmit={submitHandler}>
        <div className='form-inner'>
            <h2>Login</h2>
            {(error !== "") ? (<div className="error">{error}</div>) : ""}
            <div className='form-group'>
                <label htmlFor='username'>Username:</label>
                <input 
                    type='text' 
                    name='username' 
                    id='username' 
                    onChange={handleInputChange} 
                    value={values.username}>
                </input>
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input 
                    type='password' 
                    name='password' 
                    id='password' 
                    onChange={handleInputChange}
                    value={values.password}>
                </input>
            </div>
            <input type='submit' value='Login'/>
        </div>
    </form>
  )
}

export default LoginForm