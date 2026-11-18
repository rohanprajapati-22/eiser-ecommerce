import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerCustomer } from "../services/authService";

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
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

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        try {
            setLoading(true);

            await registerCustomer(formData);

            toast.success("Registration successful! Please login.");

            navigate("/login");
        } catch (error) {
            toast.error(
                error.response?.data || "Registration failed!"
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
                                <h2>Already have an account?</h2>
                                <p>
                                    Login to your account and continue
                                    shopping with Eiser.
                                </p>
                                <Link to="/login" className="btn_3">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="login_part_form">
                            <div className="login_part_form_iner">
                                <h3>
                                    Create Your Account
                                    <br />
                                    Join Eiser Today!
                                </h3>

                                <form
                                    className="row contact_form"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="col-md-12 form-group p_star">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="fullName"
                                            placeholder="Full Name"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

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
                                            minLength="8"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-12 form-group p_star">
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="confirmPassword"
                                            placeholder="Confirm Password"
                                            value={formData.confirmPassword}
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
                                            {loading
                                                ? "Registering..."
                                                : "Register"}
                                        </button>
                                    </div>
                                </form>

                                <p>
                                    Already registered?{" "}
                                    <Link to="/login">Login here</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
