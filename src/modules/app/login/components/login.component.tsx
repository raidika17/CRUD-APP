import { ChangeEvent, useEffect, useState } from "react";
import { Container, Row, Col, Alert } from "reactstrap";
import LoginStyle from "../styles/login.style";
import Router from "next/router";

export default function LoginComponent({ url }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    let id = e.target.id;
    let value = e.target.value;

    if (id == "email") {
      setEmail(value);
    }

    if (id == "password") {
      setPassword(value);
    }
  };

  const postLogin = () => {
    fetch(`${url}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.message == "Invalid Credentials") {
          alert("Email atau password anda salah !");
        } else if (data.message == undefined) {
          window.localStorage.setItem("token", data.token);
          Router.push("/admin/dashboard");
        }
      });
  };

  const handleOnClickLogin = (e: any) => {
    e.preventDefault();
    postLogin();
  };

  return (
    <Container>
      <Row>
        <Col sm={6} md={6} lg={6} className={LoginStyle.LOGIN_CONTAINER}>
          <Row>
            <Col className={LoginStyle.TITLE}>Login</Col>
          </Row>
          <Row>
            <Col className={LoginStyle.TITLE_DESC}>
              Welcome back, enter your credentials to continue.
            </Col>
          </Row>
          <Row>
            <Col className={LoginStyle.LABEL}>Email</Col>
          </Row>
          <Row>
            <Col>
              <input
                id="email"
                className={LoginStyle.INPUT}
                type="text"
                placeholder="Enter Email"
                onChange={(e) => handleOnChange(e)}
              />
            </Col>
          </Row>
          <Row>
            <Col className={LoginStyle.LABEL}>Password</Col>
          </Row>
          <Row>
            <Col>
              <input
                id="password"
                className={LoginStyle.INPUT}
                type="password"
                placeholder="Enter Password"
                onChange={(e) => handleOnChange(e)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <label className={LoginStyle.CHECKBOX}>
                <input type="checkbox" name="checkbox" className="me-2" />
                Remember Me
              </label>
            </Col>
          </Row>
          <Row>
            <Col>
              <button
                className={LoginStyle.BUTTON}
                onClick={handleOnClickLogin}
              >
                Login
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
