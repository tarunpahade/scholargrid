import  { useState } from 'react';
import './Login3.css'; // Import your custom CSS file
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [loginType, setLoginType] = useState('student'); // Default login type
  
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();


    // Here you can implement your login logic
    if (loginType==='teacher') {
      // Replace this with your actual authentication logic
navigate('/teacher')
      console.log('Login successful!');
      // Here you can redirect the user to another page or perform any other action
    } else {
        navigate('/')
        // If credentials are incorrect, show an error message or handle accordingly
      console.log('Invalid email or password. Please try again.');
    }
  };

  return (
    <section className="login-container">
      <div className="login-content">
        <div className="login-form">
          <h1 className="login-heading text-black black">Sign in to your account</h1>
          <form className="login-form-fields" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Your email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-input"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <label htmlFor="loginType" className="form-label">Login As</label>
              <select
                id="loginType"
                name="loginType"
                className="form-select mb-5"
                value={loginType}
                onChange={(e) => setLoginType(e.target.value)}
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>

            <button type="submit" onClick={handleLogin} className="login-button">Sign in</button>
         
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
