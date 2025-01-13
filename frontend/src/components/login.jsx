import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

import { useDispatch } from 'react-redux';


const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    // const dispatch = useDispatch();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log(user);
       
        try { 
            const res = await fetch("http://localhost:8000/api/v1/user/signin", {
                method: "GET", // Use POST method
                headers: {
                    "Content-Type": "application/json", // Inform the server about the data format
                },
                credentials: "include", 
                body: JSON.stringify(user), 
            });
            console.log(res);   
            Navigate("/home");
            toast.success(res.data.message);
        
        } catch (error) {
            toast.error(error.response?.data?.message);
            console.log(error);
        }

        setUser({
            username: "",
            password: "",
        });
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
                                    value={user.email}
                                    onChange={(e) => setUser({ ...user, email: e.target.value })}
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
                            <button type="submit" className="btn btn-block btn-sm w-full bg-red-400">
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
