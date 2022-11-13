import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { LoginData } from "../Contexts/LoginContext";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const { handleUser } = useContext(LoginData);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setUserName(e.target.value);
  };

  function namedExtra(e) {
    e.preventDefault();
    handleUser(userName);
  }

  const successHandler = () => {
    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false)
      navigate('/products')
    },2000)
  }

  return (
    <div
      className="login-page-main-div"
      style={{ width: "25%", margin: "auto", marginTop: "4rem" }}
    >
      {successMessage && (
        <Alert status="success">
          <AlertIcon />
          <AlertTitle>Login Success</AlertTitle>
          <AlertDescription>redirecting to products page</AlertDescription>
        </Alert>
      )}
      <p style={{ fontSize: "30px", textAlign: "center" }}>
        <b>LOGIN</b>
      </p>


      <Form onSubmit={namedExtra}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleEmail}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button
          onClick={successHandler}
          variant="primary"
          type="submit"
          style={{
            marginBottom: "1rem",
            width: "100%",
            fontSize: "20px",
            backgroundColor: "#f07acb",
            border: "none",
          }}
        >
          Login
        </Button>
        <p style={{ marginBottom: "1rem" }}>Not registered? Click here</p>
      </Form>

      <p
        style={{ marginBottom: "2rem", fontSize: "20px", textAlign: "center" }}
      >
        Login via:
      </p>
      <div
        className="social-media-login"
        style={{ display: "flex", gap: "40px", justifyContent: "center" }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
          width="40px"
          alt="google"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/174/174848.png"
          width="40px"
          alt="fb"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/0/747.png"
          width="40px"
          alt="apple"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/733/733579.png"
          width="40px"
          alt="twitter"
        />
      </div>
    </div>
  );
};

export default Login;
