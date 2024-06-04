import { useEffect } from "react";
import Register from "../../components/Register/Register";
import "./RegisterPage.css"; // Ensure the correct import path

const RegisterPage = () => {
  useEffect(() => {
    document.body.classList.add('myComponentActive');
    return () => {
      document.body.classList.remove('myComponentActive');
    };
  }, []);
  
  return (
    <div>
      <Register />
    </div>
  );
}

export default RegisterPage;
