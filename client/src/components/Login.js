import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Login({ setIsLoggedIn, setUserId }) {
    const navigate = useNavigate();

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
    const handleSubmit = (values, { setSubmitting }) => {
        fetch('/api/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
        })
        .then(r => {
            if (r.ok) {
                return r.json();
            } else {
                throw new Error("Invalid login credentials");
            }
        })
        .then(data => {
            const userId = data.id; // Assuming API returns user ID
            setUserId(userId);
            setIsLoggedIn(true);
            navigate(`/user/${userId}`);
        })
        .catch(error => {
            alert(error.message);
        })
        .finally(() => {
            setSubmitting(false);
        });
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
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="login-form">
                            <div>
                                <h3 className="h3-login">Username:</h3>
                                <Field
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
                                    type="password"
                                    id="password"
                                    name="password"
                                    autoComplete="current-password"
                                    className="inputs"
                                />
                                <ErrorMessage name="password" component="div" className="error-message" />
                            </div>
                            <button type="submit" className="login-btn" disabled={isSubmitting}>
                                {isSubmitting ? "Logging in..." : "Log In"}
                            </button>
                        </Form>
                    )}
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
