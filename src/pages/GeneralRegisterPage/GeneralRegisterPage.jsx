import { useEffect } from "react";
import GeneralRegister from "../../components/Register/GeneralRegisterComponent/GeneralRegister";
import "./GeneralRegisterPage.css"; // Ensure the correct import path
const GeneralRegisterPage = () => {
  useEffect(() => {
    document.body.classList.add('myComponentActive');
    return () => {
      document.body.classList.remove('myComponentActive');
    };
  }, []);
  
  return (
    <div className="d-flex jusfiy-content-center flex-column mb-5">
      <h1 className="mt-5 fw-bold mb-2 text-center">Register</h1>
      <GeneralRegister />
    </div>
  );
}

export default GeneralRegisterPage;
