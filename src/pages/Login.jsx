import React from 'react';

export default function Login() {
  const containerStyle = {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    background: 'white',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    textAlign: 'center',
    marginTop: '100px', // Center vertically
  };

  const titleStyle = {
    color: '#4CAF50', // Green color
    marginBottom: '20px',
  };

  const formGroupStyle = {
    marginBottom: '15px',
    textAlign: 'left',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    color: '#555',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  };

  const inputFocusStyle = {
    borderColor: '#4CAF50', // Green border on focus
    outline: 'none',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50', // Green background
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049', // Darker green on hover
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Login</h2>
      <form>
        <div style={formGroupStyle}>
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input
            type="email"
            id="email"
            required
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = '#4CAF50')}
            onBlur={(e) => (e.target.style.borderColor = '#ddd')}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="password" style={labelStyle}>Password</label>
          <input
            type="password"
            id="password"
            required
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = '#4CAF50')}
            onBlur={(e) => (e.target.style.borderColor = '#ddd')}
          />
        </div>
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#45a049')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#4CAF50')}
        >
          Log In
        </button>
      </form>
    </div>
  );
}
