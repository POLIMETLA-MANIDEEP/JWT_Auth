import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Dashboard = () => {
    const [userName, setUserName] = useState('');

    // Fetch user data on component mount
    useEffect(() => {
        axios.get('http://localhost:3001/dashboard')
            .then(res => {
                // Assuming the backend response contains the user's name (adjust as per your backend response)
                const userData = res.data; // Modify this according to the structure of your API response
                setUserName(userData.name); // Set the user's name in the state
            })
            .catch(err => console.log(err));
    }, []); // Empty dependency array means it runs once when the component mounts

    return (
        <div
            className="d-flex justify-content-center align-items-center bg-light vh-100"
            style={{
                padding: '20px',
                backgroundColor: '#f8f9fa',
            }}
        >
            <div
                className="bg-white p-5 rounded"
                style={{
                    width: '100%',
                    maxWidth: '600px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
            >
                <h2 className="text-center mb-4" style={{ fontSize: '2rem', color: '#007bff' }}>
                    Welcome to Your Dashboard
                </h2>
                <h3 className="text-center" style={{ fontSize: '1.5rem', color: '#28a745' }}>
                    Hello, {userName ? userName : 'Student'}!
                </h3>
                <div className="mt-4">
                    <p className="text-center" style={{ fontSize: '1.1rem' }}>
                        Welcome to your student dashboard. Here you can manage your profile, view your
                        courses, and access other resources. If you need assistance, please contact
                        the support team.
                    </p>
                </div>
                <div className="text-center">
                    <button
                        className="btn btn-primary w-50 mt-3"
                        style={{ padding: '12px', fontSize: '1rem' }}
                        onClick={() => alert('More features coming soon!')}
                    >
                        Explore Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
