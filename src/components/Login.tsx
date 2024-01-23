import { useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const { log, message } = location.state || {};
  console.log("location", location);
  return (
    <>
      <h1>Login Page</h1>
      {!log ? (
        <p style={{ color: "yellow", textAlign: "center" }}>{message}</p>
      ) : (
        <p>Logged in, Welcome!</p>
      )}
    </>
  );
};

export default Login;
