import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(res => {
                navigate('/login');
            })
            .catch(err => console.log(err));
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center vh-100"
            style={{
                background: 'linear-gradient(to right, #6a11cb, #2575fc)',  // Gradient background
                height: '100vh',
                width: '100vw',
                padding: '0',
                overflow: 'hidden',
                position: 'fixed',
                top: '0',
                left: '0',
            }}
        >
            <div
                className="bg-white p-5 rounded-lg shadow-lg"
                style={{
                    height: '95vh',
                    width: '100%',
                    maxWidth: '420px',
                    boxShadow: '0 6px 40px rgba(0, 0, 0, 0.1)',
                    borderRadius: '16px', // Larger border radius for a softer, more modern feel
                    padding: '40px 50px',
                    transform: 'scale(1)',  // Initial scale
                    animation: 'fadeIn 0.5s ease-in-out',  // Simple fade-in animation
                }}
            >
                <h2 className="text-center mb-4" style={{
                    marginTop:'-10%',
                    fontSize: '1.9rem',
                    fontWeight: '700',
                    color: '#333',
                    letterSpacing: '1px',  // Slight letter-spacing for elegance
                }}>
                    Create an Account
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="form-label" style={{ fontSize: '1.1rem', fontWeight: '500', marginRight:'80%', marginLeft:'0%' }}>
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-3"
                            onChange={(e) => setName(e.target.value)}
                            style={{
                                padding: '10px',
                                fontSize: '1.1rem',
                                borderRadius: '10px',
                                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
                                border: '1px solid #ccc',
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="form-label" style={{ fontSize: '1.1rem', fontWeight: '500', marginRight:'80%', marginLeft:'0%' }}>
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
                                fontSize: '1.1rem',
                                borderRadius: '10px',
                                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
                                border: '1px solid #ccc',
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label" style={{ fontSize: '1.1rem', fontWeight: '500', marginRight:'80%', marginLeft:'0%' }}>
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
                                fontSize: '1.1rem',
                                borderRadius: '10px',
                                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
                                border: '1px solid #ccc',
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-100 mb-4"
                        style={{
                            padding: '10px',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            borderRadius: '8px',
                            boxShadow: '0 5px 18px rgba(0, 123, 255, 0.2)',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        Register
                    </button>
                </form>
                <div className="text-center">
                    <p style={{ fontSize: '0.9rem', color: '#666' }}>
                        Already have an account? 
                    </p>
                    <button
                        className="btn btn-outline-secondary w-100"
                        onClick={() => navigate('/login')}
                        style={{
                            padding: '10px',
                            fontSize: '1.1rem',
                            fontWeight: '500',
                            borderRadius: '8px',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Registration;
