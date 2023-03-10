import React, { useState } from "react";
import styled from "styled-components";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useMutation } from "@tanstack/react-query";
import { signUp } from "../ApiCalls/APIs";

const Register = () => {
const navigate = useNavigate()

// const dispatch = useAppDispatch()

const userSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().required(),
  password : yup.string().required()
})

// type formData = yup.InferType<>

const registerUser = useMutation({
  mutationFn : signUp,
  mutationKey : ["allUsers"]
})


  const [show, setShow] = useState(false);
  const eye = () => {
    setShow(!show);
  };

  return (
    <Container>
      <Wrapper>
        <h4>sign up.</h4>

        <Input
          type={"text"}
          placeholder="Enter your name"
        />{" "}
        <br />

        <Input
          required
          type={"email"}
          placeholder="augustinewrites@example.com"
        />{" "}
        <br />
        
        <Password>
          <InputPassword
            min={6}
            required
            type={show ? "text" : "password"}
            placeholder="password"
          />{" "}
          {show ? (
            <Icon onClick={eye}>
              <AiFillEye />
            </Icon>
          ) : (
            <Icon onClick={eye}>
              <AiFillEyeInvisible />
            </Icon>
          )}
        </Password>
        <br />

        <Password>
        <select>
                <option>How did you hear about us?</option>
                <option>Facebook</option>
                <option>Twitter</option>
                <option>Instagram</option>
                <option>Friend/Family/Co Worker Referrer</option>
                <option>Google Search</option>
                <option>Google PlayStore</option>
                <option>Online Blog</option>
                <option>Local Newspaper</option>
                <option>At an event</option>
                <option>Others</option>
            </select>
        </Password>
        <br />
        <br />

        <Button type="submit">Sign Up</Button>

        <SignUP>
          <p>Already have an account ?</p>{" "}
          <Link style={{ textDecoration: "none" }} to={"/login"}>
            <b>Sign In</b>
          </Link>
        </SignUP>

      </Wrapper>
    </Container>
  );
};

export default Register;

const InputPassword = styled.input`
  outline: none;
  background-color: transparent;
  height: 40px;
  padding-left: 20px;
  border: 0;

  color: white;
  ::placeholder {
    font-weight: 400;
    color: rgb(209, 209, 210);
    text-transform: capitalize;
    font-size: 13px;
  }
`;

const Password = styled.div`
  display: flex;
  border: 4px solid rgb(48, 48, 61);
  justify-content: center;
  align-items: center;
  width: 320px;
  border-radius: 12px;
  justify-content: space-between;

  select{
    width: 100%;
    height: 40px;
    outline: none;
    height: 40px;
    background-color: transparent;
    padding-left: 20px;
    border: 0;
    text-transform: capitalize;
    font-size: 13px;
    font-weight: 400;
    color: rgb(209, 209, 210);
    }
    option{
        color: black;
        cursor: pointer;
    }

  @media screen and (max-width: 500px) {
    width: 250px;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
  color: rgb(209, 209, 210);
`;

const Wrapper = styled.form`
  border: 4px solid rgb(48, 48, 61);
  box-shadow: rgb(48, 48, 61) 0px 3px 8px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  padding-bottom: 40px;

  @media screen and (max-width: 500px) {
    box-shadow: none;
    border: 0;
  }
  h4 {
    color: white;
    font-size: 35px;
    text-transform: capitalize;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgb(24, 24, 32);
`;

const Input = styled.input`
  outline: none;
  width: 300px;
  border-radius: 12px;
  background-color: transparent;
  height: 40px;
  padding-left: 20px;
  border: 4px solid rgb(48, 48, 61);
  color: white;

  @media screen and (max-width: 500px) {
    width: 228px;
  }

  ::placeholder {
    font-weight: 400;
    color: rgb(209, 209, 210);
    font-size: 13px;
  }
`;

const SignUP = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    flex-wrap: wrap;
    width: 200px;
  }

  p {
    color: rgb(209, 209, 210);
    font-weight: 500;
    margin-right: 6px;
  }
  transition: all 360ms;
  b {
    color: white;
    cursor: pointer;
    :hover {
      color: rgb(209, 209, 210);
    }
  }
`;
const Button = styled.button`
  background-color: purple;
  border: 0;
  width: 320px;
  border-radius: 12px;
  height: 40px;
  color: white;
  font-weight: 500;
  @media screen and (max-width: 500px) {
    width: 250px;
  }
  font-size: 16px;
  cursor: pointer;
  transition: all 360ms;

  :hover {
    transform: scale(0.9);
  }
`;