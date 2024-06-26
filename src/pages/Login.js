import React from 'react';

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">Login</h2>
        <input type="email" placeholder="Email" className="mb-4 p-2 border rounded w-full" />
        <input type="password" placeholder="Password" className="mb-4 p-2 border rounded w-full" />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded shadow">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
