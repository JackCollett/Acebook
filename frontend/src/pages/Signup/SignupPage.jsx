import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signup } from "../../services/authentication";

export const SignupPage = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signup(firstName, lastName, email, password);
      console.log("redirecting...:");
      navigate("/login");
    } catch (err) {
      console.error(err);
      navigate("/signup");
    }
  };

  const handlefirstNameChange = (event) => {
    setfirstName(event.target.value);
  };

  const handlelastNameChange = (event) => {
    setlastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={handlefirstNameChange}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={handlelastNameChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          placeholder="Password"
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input role="submit-button" id="submit" type="submit" value="Submit" />
      </form>
    </>
  );
};
