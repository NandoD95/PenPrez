import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; 
import { useOutletContext } from "react-router-dom"

function Login() {
    const navigate = useNavigate(); 

    const [isLoggedIn, setIsLoggedIn, userId, setUserId] = useOutletContext();

    // Initial form values
    const initialValues = {
        username: "",
        password: ""
    };

    // Form validation schema using Yup
    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required")
    });

    // Handle form submission
    const handleFormSubmit = (values) => { 
        
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
        })
        .then(r => {
            if (r.ok) {
                r.json().then(data => { 
                    console.log(data)
                    
                    setUserId(()=> data.id);
                    setIsLoggedIn(true);
                    navigate('/review');
                });
            } else {
                throw new Error("Invalid login credentials");
            }
        })
        
        .catch(error => {
            alert(error.message);
        })
       
    };

    return (
        <>
            <div className="container">
                <h1>PenPrez</h1>
            </div>
            <div>
                <h2 className="h2-login">Welcome to PenPrez</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleFormSubmit}
                >
                    {( props ) => { 
                        const { values: { 
                            username, 
                            password
                        }, 
                            handleChange, handleSubmit } = props
                        return(
                        <Form className="login-form" onSubmit = {handleSubmit}>
                            <div>
                                <h3 className="h3-login">Username:</h3>
                                <Field 
                                    onChange = {handleChange} 
                                    value = {username}
                                    type="text"
                                    id="username"
                                    name="username"
                                    autoComplete="username"
                                    className="inputs"
                                />
                                <ErrorMessage name="username" component="div" className="error-message" />
                            </div>
                            <div>
                                <h3 className="">Password:</h3>
                                <Field 
                                    onChange = {handleChange} 
                                    value = {password}
                                    type="password"
                                    id="password"
                                    name="password"
                                    autoComplete="current-password"
                                    className="inputs"
                                />
                                <ErrorMessage name="password" component="div" className="error-message" />
                            </div>
                            <button type="submit" className="login-btn" > Submit
                                {/* {isSubmitting ? "Logging in..." : "Log In"} */}
                            </button>
                        </Form>)
                    }}
                </Formik>
                <h3 className="">
                    New to PenPrez?{" "}
                    <Link
                        className="text-primaryBlue border-b-2 border-primaryBlue hover:border-primaryPurple hover:text-primaryPurple"
                        to="/signup"
                    >
                        Sign Up
                    </Link>
                </h3>
            </div>
        </>
    );
}

export default Login;
