import React from 'react';

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  } else if (!input.password) {
    errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid';
  }
  

  return errors;
};

export default function  Form() {
  // const [username, setUsername] = React.useState('')
  // const [password, setPassword] = React.useState('')
  const [input, setInput] = React.useState({
    username: '',
    password: '',
  });

  const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });

    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }

  const [errors, setErrors] = React.useState({});

  return (
    <form>
      <div>
        <label>Username:</label>
        <input type="text" name="username" onChange={handleInputChange} value={input.username} className={errors.username && 'danger'} />
        {errors.username && (
          <p className="danger">{errors.username}</p>
        )}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" onChange={handleInputChange} value={input.password} className={errors.password && 'danger'} />
        {errors.password && (
          <p className='danger'>{errors.password}</p>
        )}
      </div>
      <input type="submit" value="Submit"/>
    </form>
  )
}
