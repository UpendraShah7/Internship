import { useReducer, type ChangeEvent } from 'react';

interface FormState {
  name: string;
  email: string;
  password: string;
}

type FormAction = {
  name: string;
  value: string;
};

const initialState: FormState = { name: '', email: '', password: '' };

function reducer(state: FormState, action: FormAction): FormState {
  return {
    ...state,
    [action.name]: action.value,
  };
}

function Form() {
  const [formData, dispatch] = useReducer(reducer, initialState);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      name: e.target.name,
      value: e.target.value,
    });
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Form;