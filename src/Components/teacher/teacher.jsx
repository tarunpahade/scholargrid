import  { useState } from 'react';
import '../login1/Login3.css'; // Import your custom CSS file
import { useNavigate } from 'react-router-dom';

const Teacher = () => {
  const [question, setquestion] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
  };
const navigate=useNavigate()

const logout = () =>{
  navigate('/login')
}
  return (
    <section className="login-container">
      <div className="login-content">
        <div className="login-form">
          <h1 className="login-heading text-black">Upload Question</h1>
          <form className="login-form-fields" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="question" className="form-label">Enter Question</label>
              <input
                type="question"
                name="question"
                id="question"
                className="form-input"
                placeholder=""
                value={question}
                onChange={(e) => setquestion(e.target.value)}
                required
              />
            </div>
            <button type="submit"  className="login-button">Upload</button>
      
            <button  onClick={logout} className="login-button mt-7">
          Logout
        </button>      
          </form>
        </div>
      </div>
      
    </section>
  );
};

export default Teacher;
