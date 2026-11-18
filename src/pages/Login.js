
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginCustomer } from "../services/authService";
import { useAuth } from "../context/AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await loginCustomer(formData);

            // // Store JWT token
            // localStorage.setItem("token", response.token);

            // // Store customer details
            // localStorage.setItem(
            //     "customer",
            //     JSON.stringify(response.customer)
            // );
            login(response.token, response.customer);

            toast.success("Login successful!");

            navigate("/");
        } catch (error) {
            const message = error.response?.data;

            toast.error(
                typeof message === "string"
                    ? message
                    : "Invalid email or password!"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="login_part section_padding">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-6 col-md-6">
                        <div className="login_part_text text-center">
                            <div className="login_part_text_iner">
                                <h2>New to our Shop?</h2>
                                <p>
                                    Create your account and enjoy shopping
                                    with Eiser.
                                </p>

                                <Link to="/register" className="btn_3">
                                    Create an Account
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="login_part_form">
                            <div className="login_part_form_iner">
                                <h3>
                                    Welcome Back!
                                    <br />
                                    Please Login Now
                                </h3>

                                <form
                                    className="row contact_form"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="col-md-12 form-group p_star">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-12 form-group p_star">
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="Password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-12 form-group">
                                        <button
                                            type="submit"
                                            className="btn_3"
                                            disabled={loading}
                                        >
                                            {loading ? "Logging in..." : "Login"}
                                        </button>
                                    </div>
                                </form>

                                <p>
                                    Don't have an account?{" "}
                                    <Link to="/register">
                                        Register here
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Login;
