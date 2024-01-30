import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useAuth } from '../../components/AuthProvider/AuthProvider'; // Import useAuth hook

function Login() {
  const { register, handleSubmit, reset, formState: { errors }} = useForm();
  const { loginData, login, logout } = useAuth(); // Use the useAuth hook to access authentication-related functions

  const onSubmit = async data => {
    try {
      const response = await fetch(`http://localhost:3000/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        // Handle successful login (e.g., redirect user)
        console.log('Login successful');
        login(); // Call the login function from useAuth
        reset(); // Reset form after successful login
      } else {
        // Handle failed login
        console.error('Login failed');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };
  

  return (
    <div className="max-w-[1200px] mx-auto">   
      <div className=" bg-white sm:items-center sm:pt-0">
        <div className="max-w-[1000px] mx-auto">
          <Navbar />
          <div className="mt-8 overflow-hidden">
            {/* Conditional rendering based on authentication status */}
            {!loginData ? (
              <div className="grid grid-cols-1 md:grid-cols-2 h-screen mt-20">
                <form className="dark:bg-gray-800 sm:rounded-lg" onSubmit={handleSubmit(onSubmit)}>
                  <h1 className="text-4xl sm:text-5xl text-gray-800 font-extrabold tracking-tight mb-4 text-orange ">
                    Login
                  </h1>
                  {/* Form fields */}
                  <div className="flex flex-col">
                    <label htmlFor="username" className="">Brugernavn:</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Brugernavn"
                      autoComplete="username"
                      className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                      {...register("username", { required: true })}
                    />
                    {errors.username && <span>Username is required</span>}
                  </div>
                  <div className="flex flex-col mt-2">
                    <label htmlFor="password" className="">Password:</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      autoComplete="current-password"
                      className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                      {...register("password", { required: true })}
                    />
                    {errors.password && <span>Password is required</span>}
                  </div>
                  {/* Submit button */}
                  <button
                    type="submit"
                    className="border-2 border-darkGray bg-lightbrown rounded-[3px] p-2 my-2 px-6"
                  >
                    Login
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <p>Du er logget ind som {`${loginData.firstname} ${loginData.lastname} `}</p>
                <button onClick={logout}>Log ud</button>
              </div>
            )}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
