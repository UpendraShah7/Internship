import { useState } from "react";
import './RegForm.css'

export const Form1 = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email" :
      setEmail(value);
      break;
      case "password" :
      setPassword(value);
      break;
      case "phoneNumber" :
      setPhoneNumber(value);
      break;
      default:
        break;
    }
  };

  return (
    <>
    <form >
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>

          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter firstName"
            required
            value={firstName}
            onChange={handleInputChange}
          />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter lastName"
            required
            value={lastName}
            onChange={handleInputChange}
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            required
            value={email}
            onChange={handleInputChange}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
            value={password}
            onChange={handleInputChange}
          />
          
          <label htmlFor="phoneNumber">
            <b>Phone Number</b>
          </label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Enter phoneNumber"
            required
            value={phoneNumber}
            onChange={handleInputChange}
          />

          <button type="submit">Sign Up</button>
        </div>
    </form>

    <p>
      {firstName} {lastName} {email} {password} {phoneNumber}
    </p>
    </>
  );
};
