import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  // Hook to navigate programmatically

    axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(res => {
                if (res.data.Login) {
                    navigate('/dashboard');
                } else {
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center vh-100"
            style={{
                height: '100vh',
                width: '100vw',
                background: 'linear-gradient(to right, #6a11cb, #2575fc)',// Professional blue background
                padding: '0',
                overflow: 'hidden',
                position: 'fixed',
                top: '0',
                left: '0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div
                className="bg-white p-5 rounded-lg shadow-lg"
                style={{
                    width: '100%',
                    maxWidth: '450px',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                    borderRadius: '12px', // Rounded corners for a modern look
                    padding: '30px 40px',
                }}
            >
                <h2 className="text-center mb-4" style={{
                    fontSize: '2rem',
                    fontWeight: '600',
                    color: '#333',
                }}>
                    Login
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="form-label" style={{ fontSize: '1.1rem', marginRight:'85%', marginLeft:'0%' }}>
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-3"
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                padding: '10px',
                                fontSize: '1rem',
                                borderRadius: '8px',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label" style={{ fontSize: '1.1rem',marginRight:'80%', marginLeft:'0%' }}>
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            className="form-control rounded-3"
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                padding: '10px',
                                fontSize: '1rem',
                                borderRadius: '8px',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn  btn-primary w-100 mb-3"
                        style={{
                            padding: '10px',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            borderRadius: '8px',
                            boxShadow: '0 4px 12px rgba(0, 123, 255, 0.3)',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        Login
                    </button>
                </form>
                <div className="text-center">
                    <p style={{ fontSize: '0.9rem', color: '#666' }}>
                        Don't have an account?
                    </p>
                    <button
                        className="btn btn-light border w-100"
                        onClick={() => navigate('/register')}
                        style={{
                            padding: '10px',
                            fontSize: '1.1rem',
                            fontWeight: '500',
                            borderRadius: '8px',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
