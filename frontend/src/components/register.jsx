import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

import { useDispatch } from 'react-redux';


const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email:"",
        phone:"",
        password: "",
    });

    const navigate = useNavigate();
    // const dispatch = useDispatch();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log(user);

        try {
            const res = await fetch("http://localhost:8000/api/v1/user/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", 
                },
                credentials: "include", 
                body: JSON.stringify(user), 
            });
            
            const data = await res.json(); 
            
            if (res.ok) {
                console.log("User signed up successfully:", data);
            } else {
                console.log("Signup failed:", data);
            }
            
            console.log(res)
         
            navigate("/home");
            toast.success("Registered");
            // dispatch(setAuthUser(res.data));
        } catch (error) {
            toast.error(error.response?.data?.message);
            console.log(error);
        }

        setUser({
            name: "",
            email:"",
            phone:"",
            password: "",
        });
    };

    return (
        <>
            <div className=" flex flex-col w-screen h-screen">
               
                <div className="flex-grow flex items-center justify-center mt-16">
                    <div className="text-center p-6 rounded-lg shadow-md rounded-md   border border-gray-100 max-w-md w-full">
                        <h1 className="text-3xl font-bold text-center ">Register</h1>
                        <form onSubmit={onSubmitHandler} className="p-4">
                            <div>Enter your details</div>
                            <div className="p-4">
                                <input
                                    className="input h-10 w-full"
                                    value={user.name}
                                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                                    type="text"
                                    placeholder="Enter Username"
                                />
                            </div>
                            <div className="p-4">
                                <input
                                    className="input h-10 w-full"
                                    value={user.email}
                                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                                    type="text"
                                    placeholder="Enter Your Email"
                                />
                            </div>
                            <div className="p-4">
                                <input
                                    className="input h-10 w-full"
                                    value={user.phone}
                                    onChange={(e) => setUser({ ...user, phone: e.target.value })}
                                    type="text"
                                    placeholder="Enter Your Phone Number"
                                />
                            </div>
                            <div className="p-4">
                                <input
                                    className="input  h-10 w-full"
                                    value={user.password}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    type="Password"
                                    placeholder="Enter Password"
                                />
                            </div>
                            <p className="text-center p-4">
                                Already Have An Account? <Link to="/login">Login</Link>
                            </p>
                            <button type="submit" className="btn btn-block btn-sm w-full bg-red-400">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
