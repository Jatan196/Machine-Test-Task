import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

import { useDispatch } from 'react-redux';


const Login = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    // const navigate = useNavigate();
    // const dispatch = useDispatch();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log(user);

        // try {
        //     const res = await axios.post(`${BASE_URL}/api/v1/user/login`, user, {
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         withCredentials: true
        //     });
        //     console.log(res);
        //     navigate("/window");
        //     toast.success(res.data.message);
        //     dispatch(setAuthUser(res.data));
        // } catch (error) {
        //     toast.error(error.response?.data?.message);
        //     console.log(error);
        // }

        // setUser({
        //     username: "",
        //     password: "",
        // });
    };

    return (
        <>
            <div className=" flex flex-col w-screen h-screen">
               
                <div className="flex-grow flex items-center justify-center mt-16">
                    <div className="text-center p-6 rounded-lg shadow-md rounded-md bg-clip-padding  border border-gray-100 max-w-md w-full">
                        <h1 className="text-3xl font-bold text-center ">Login</h1>
                        <div>Enter your credentails</div>
                        <form onSubmit={onSubmitHandler} className="p-4">
                            <div className="p-4">
                                <input
                                    className="input input-bordered h-10 w-full"
                                    value={user.username}
                                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                                    type="text"
                                    placeholder="Enter Username"
                                />
                            </div>
                            <div className="p-4">
                                <input
                                    className="input input-bordered h-10 w-full"
                                    value={user.password}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    type="Password"
                                    placeholder="Enter Password"
                                />
                            </div>
                            <p className="text-center p-4">
                                Don't Have An Account? <Link to="/register">Sign Up</Link>
                            </p>
                            <button type="submit" className="btn btn-block btn-sm w-full">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
