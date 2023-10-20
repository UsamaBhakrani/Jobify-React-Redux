import styled from "styled-components";
import Logo from "../components/Logo";
import { useState } from "react";
import FormRow from "../components/FormRow";

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

  const handleChange = (e) => {
    console.log(e.target);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleOnSubmit}>
        <Logo />
        <h3>Login</h3>
        <FormRow
          name="name"
          type="text"
          value={values.name}
          handleChange={handleChange}
        />
        <FormRow
          name="email"
          type="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          name="password"
          type="password"
          value={values.password}
          handleChange={handleChange}
        />

        <button className="btn btn-block" type="submit">
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Register;
