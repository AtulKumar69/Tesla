import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
  };
  const [text, setText] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setText({
      ...text,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };

  const handleValidation = () => {
    const { password,username } = text;
    if (password==="") {
      toast.error("Password and Email required", toastOptions);
      return false;
    } else if (username === "") {
      toast.error(
        "Password and Email required",
        toastOptions
      );
      return false;
    }

    return true;
  };
  return (
    <>
      <FormContainer>
        <div className="brand">
          <img
            src="https://storage.googleapis.com/webdesignledger.pub.network/WDL/12f213e1-t1.jpg"
            alt="logo"
          />
          <h1>Tesla Chat App</h1>
        </div>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
            min="3"
          />

          <Input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <Button type="submit">Login</Button>
          <Span>
            Don't have an account ? <Link to="/register">Register</Link>
          </Span>
        </Form>
      </FormContainer>
      <ToastContainer />
    </>
  );
};

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 2rem;
    }
    h1 {
      color: black;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
//   background-color: black;
box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 2rem;
  padding: 3rem 6.5rem 3rem 5rem;
`;
const Input = styled.input`
  background-color: transparent;
  padding: 1rem;
  border: 0.1rem solid black;
  border-radius: 0.4rem;
  color: black;
  width: 100%;
  font-size: 1rem;
  &:focus {
    border: 0.1rem solid black;
    outline: none;
  }
`;

const Button = styled.button`
  background-color: black;
  color: white;
  width: 115%;
  padding: 1rem 3rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.4rem;
  font-size: 1rem;
  text-transform: uppercase;
  transistion: 0.5s ease-in-out;
  &:hover {
    background-color: #4136a7;
  }
`;

const Span = styled.span`
  color: black;
  a {
    text-decoration: none;
    font-weight: bold;
  }
`;

export default Login;
