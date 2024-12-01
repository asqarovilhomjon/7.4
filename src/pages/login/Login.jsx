import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useDispatch } from 'react-redux';
import { addToken } from '../../contex/tokenSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const username = useRef(null)
  const password = useRef(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        let user ={
            username: username.current.value,
            password: password.current.value
        }
        console.log(user);
        axios
            .post('/login', user)
            .then(res => {
                toast.success("You are Logeed in");
                dispatch(addToken(res.data.accessToken));
                navigate("/home");
            })
            .catch(err => {
                toast.error("Unfortunately, the username or password is wrong. Please try again!");
            })
    }
  return (
    <>
      <ToastContainer/>
      <section className='bg-gray-100'>
        <div className="container__person">
          <div className="min-h-screen  flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Login
              </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                      Username
                    </label>
                    <div className="mt-1">
                      <input
                        id="username"
                        name="username"
                        type="text"
                        autoComplete="username"
                        required
                        ref={username}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        ref={password}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    {/* <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Sign in
                    </button> */}
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                      Sign in
                    </button>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login