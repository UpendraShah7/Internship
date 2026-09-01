////type FormValues = {
//   name: string;
//   email: string;
//   age: number;
// };

// 2
// import { useForm } from 'react-hook-form';
// const { register, handleSubmit } = useForm<FormValues>();

//3
// /* <input {...register("email")} /> */

//4
//<form onSubmit={handleSubmit(onSubmit, onError)}></form>

import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
// import axios from 'axios';

type FormValues = {
  name: string;
  email: string;
  age: number;
    social: {
    facebook: string;
    twitter: string;
  };
};

function Reacthookform() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: 'Ups',
      email: '',
      age: 0,
      social:{
        facebook:'',
        twitter:''
      }
    },
  });



//   const {
//     register,
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormValues>({
//     defaultValues: async () => {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
//       return {
//         name: response.data.name,
//         email: response.data.email,
//         age: 0, 
//       };
//     },
//   });


  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="form-page">
      <form className="hook-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>User Details</h2>

        <div className="field-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            {...register('name', {
              required: 'Name is required',
            })}
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>

        <div className="field-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
              validate: {
                Notendwithcom: (value) => {
                  if (value.endsWith('.com')) {
                    return true;
                  }
                  return 'Email must end with .com';
                },
                Notendwithorg: (value) => {
                  if (value.endsWith('.org')) {
                    return true;
                  }
                  return 'Email must end with .org';
                },
              },
            })}
          />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>

        <div className="field-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            placeholder="Enter your age"
            {...register('age', {
              required: 'Age is required',
              valueAsNumber: true,
              min: {
                value: 18,
                message: 'You must be at least 18 years old',
              },
              max: {
                value: 50,
                message: 'You must be under 50 years old',
              },
            })}
          />
          {errors.age && <span className="error">{errors.age.message}</span>}
        </div>

         <div className="field-group">
          <label htmlFor="facebook">Facebook</label>
          <input
            type="text"
            id="facebook"
            placeholder="Facebook name .."
            {...register('social.facebook')}
          />
          {errors.social?.facebook && <span className="error">{errors.social.facebook.message}</span>}
        </div>

        <div className="field-group">
          <label htmlFor="twitter">Twitter</label>
          <input
            type="text"
            id="twitter"
            placeholder="Twitter name .."
            {...register('social.twitter')}
          />
          {errors.social?.twitter && <span className="error">{errors.social.twitter.message}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} placement="top-right" />
    </div>
  );
}

export default Reacthookform;
