import { useState } from "react";
import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import Input from "../../common/Input";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "../Admin/styles";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const checkCredentials = () => {
    if (username === "admin" && password === "admin") {
      navigate("/admin");
    } else {
      setErrorMessage("Incorrect username or password.");
    }
  };

  return (
    <ContactContainer>
      <Row justify="space-between" align="middle" style={{ minHeight: "20vh" }}>
        <Col
          lg={12}
          md={11}
          sm={24}
          xs={24}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Slide direction="left" triggerOnce>
            <h2>Login</h2>
            <img
              src="img/login.png"
              alt="Admin icon"
              style={{ width: "100px", height: "100px" }}
            />
            <p className="p-8">
              Admin can see the responses submitted through the contact form present on the homepage.
            </p>
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <FormGroup autoComplete="off">
              <Col span={24}>
                <Input
                  type="text"
                  name="UserName"
                  placeholder="Please Enter Your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Col>
              <Col span={24}>
                <Input
                  type="password"
                  name="Password"
                  placeholder="Please Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
              <ButtonContainer>
                <Button name="submit" onClick={checkCredentials}>
                  Login
                </Button>
              </ButtonContainer>
              {errorMessage && <Span style={{ color: "red" }}>{errorMessage}</Span>}
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default Login;
