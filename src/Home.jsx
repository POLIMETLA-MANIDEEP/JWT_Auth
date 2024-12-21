import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div
            className="d-flex justify-content-center align-items-center bg-info vh-100"
            style={{
                position: 'fixed',  // Make the container fixed to fill the window
                top: '0',  // Align it to the top of the viewport
                left: '0',  // Align it to the left of the viewport
                right: '0',  // Stretch to the right side of the viewport
                bottom: '0',  // Stretch to the bottom of the viewport
                padding: '20px',  // Padding to add space around the content on smaller screens
                background: 'linear-gradient(to right, #6a11cb, #2575fc)',  // Bright blue background
                backgroundSize: 'cover',  // Makes the background image fill the screen
                backgroundPosition: 'center',  // Keep background centered
                minHeight: '100vh',  // Ensures it takes the full height of the screen
                display: 'flex',  // Use flexbox to center content
                justifyContent: 'center',  // Horizontally center content
                alignItems: 'center',  // Vertically center content
                overflow: 'hidden',  // Prevent scrolling
            }}
        >
            <div
                className="bg-white p-5 rounded shadow-lg"
                style={{
                    width: '100%',
                    maxWidth: '600px',  // Restrict the width for better responsiveness
                    textAlign: 'center',  // Center-align the content
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',  // Soft shadow for depth
                    borderRadius: '12px',  // Rounded corners for a modern aesthetic
                }}
            >
                <h1
                    style={{
                        fontSize: '2.5rem',  // Larger title for emphasis
                        color: '#007bff',  // Blue color for title
                        fontWeight: '700',  // Bold text
                        marginBottom: '20px',
                    }}
                >
                    Welcome to Our Application!
                </h1>
                <p
                    style={{
                        fontSize: '1.2rem',  // Slightly larger font size for readability
                        color: '#555',  // Lighter gray color for the paragraph text
                        marginBottom: '30px',  // More space after the paragraph
                    }}
                >
                    To get started, please register or log in to your account.
                </p>
                <div
                    className="d-flex justify-content-between"
                    style={{
                        gap: '15px',  // Space between the buttons
                    }}
                >
                    <Link
                        to="/register"
                        className="btn btn-primary w-100"
                        style={{
                            padding: '12px 0',  // Taller buttons
                            fontSize: '1.1rem',  // Slightly larger text
                            fontWeight: '500',  // Balanced font weight
                            borderRadius: '8px',  // Rounded corners for buttons
                            boxShadow: '0 4px 10px rgba(0, 123, 255, 0.3)',  // Subtle shadow effect
                            transition: 'all 0.3s ease',  // Smooth hover transition
                        }}
                    >
                        Register
                    </Link>
                    <Link
                        to="/login"
                        className="btn btn-secondary w-100"
                        style={{
                            padding: '12px 0',  // Taller buttons
                            fontSize: '1.1rem',  // Slightly larger text
                            fontWeight: '500',  // Balanced font weight
                            borderRadius: '8px',  // Rounded corners for buttons
                            boxShadow: '0 4px 10px rgba(108, 117, 125, 0.3)',  // Subtle shadow effect
                            transition: 'all 0.3s ease',  // Smooth hover transition
                        }}
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
