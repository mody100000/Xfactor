import { useEffect } from "react";
import Login from "../../components/Login/Login";
import "./LoginPage.css"; // Ensure the correct import path

const LoginPage = () => {
  useEffect(() => {
    document.body.classList.add('myComponentActive');
    return () => {
      document.body.classList.remove('myComponentActive');
    };
  }, []);
  
  return (
    <div>
      <Login />
    </div>
  );
}

export default LoginPage;
