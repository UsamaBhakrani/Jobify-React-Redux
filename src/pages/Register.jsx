import styled from "styled-components";
import Logo from "../components/Logo";
import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleOnSubmit}>
        <Logo />
        <h3>Login</h3>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            value={values.name}
            name="name"
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            value={values.email}
            name="email"
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={values.password}
            name="password"
            className="form-input"
          />
        </div>
        <button className="btn btn-block" type="submit">
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Register;
