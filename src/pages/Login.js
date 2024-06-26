import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const predefinedEmail = 'admin@p.com';
    const predefinedPassword = '123';

    if (email === predefinedEmail && password === predefinedPassword) {
      const user = { email };
      dispatch(login(user));
    } else {
      setError('Invalid email or password');
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="mb-4 p-2 border rounded w-full" 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="mb-4 p-2 border rounded w-full" 
        />
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded-lg shadow-md"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
