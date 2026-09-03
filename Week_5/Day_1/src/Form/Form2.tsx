import { useState } from 'react';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export const Form2 = () => {
  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
  });


  const [errors, setErrors] = useState<Partial<Record<keyof User, string>>>({});
  //const [errors, setErrors] = useState<{
  //   firstName?: string;
  //   lastName?: string;
  //   email?: string;
  //   password?: string;
  //   phoneNumber?: string;
  // }>({});

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        return value.trim().length < 2 ? 'Must be at least 2 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? 'Invalid email address'
          : '';
      case 'password':
        return value.length < 6 ? 'Password must be at least 6 characters' : '';
      case 'phoneNumber':
        return !/^\d{10}$/.test(value) ? 'Phone number must be 10 digits' : '';
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };



  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
};

  return (
    <>
      <form onSubmit={handleSubmit}>
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
            value={user.firstName}
            onChange={handleInputChange}
          />
         {errors.firstName ? <span className="error">{errors.firstName}</span> : null}

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter lastName"
            required
            value={user.lastName}
            onChange={handleInputChange}
          />
         {errors.lastName ? <span className="error">{errors.lastName}</span> : null}

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            required
            value={user.email}
            onChange={handleInputChange}
          />
         {errors.email ? <span className="error">{errors.email}</span> : null}


          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
            value={user.password}
            onChange={handleInputChange}
          />
          {errors.password ? <span className="error">{errors.password}</span> : null}

          <label htmlFor="phoneNumber">
            <b>Phone Number</b>
          </label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Enter phoneNumber"
            required
            value={user.phoneNumber}
            onChange={handleInputChange}
          />
          {errors.phoneNumber ? <span className="error">{errors.phoneNumber}</span> : null}

          <button type="submit">Sign Up</button>
        </div>
      </form>

      <p>
        {user.firstName} {user.lastName} {user.email} {user.password}{' '}
        {user.phoneNumber}
      </p>
    </>
  );
};
