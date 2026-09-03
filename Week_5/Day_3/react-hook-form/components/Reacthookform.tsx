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
  phonenumber?: (string | undefined)[];
  dob: Date;
  country: string;
  gender: string;
  skills: string[];
};

function Reacthookform() {
  const { register, control, handleSubmit, watch, getValues, setValue, formState ,reset , trigger } =
    useForm<FormValues>({
      defaultValues: {
        name: '',
        email: '',
        age: 0,
        social: {
          facebook: '',
          twitter: '',
        },
        phonenumber: ['', ''],
        dob: new Date(),
        country: '',
        gender: '',
        skills: [],
      },
      mode: 'onBlur',
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

  const {
    errors,
    dirtyFields,
    touchedFields,
    isDirty,
    isValid,
    isSubmitting,
    isSubmitted,
    isSubmitSuccessful,
    submitCount,
  } = formState;
  console.log(
    formState,
    dirtyFields,
    touchedFields,
    isDirty,
    isValid,
    isSubmitting,
    isSubmitted,
    isSubmitSuccessful,
    submitCount
  );

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const watchForm = watch('name');

  const getFormValues = () => {
    const values = getValues();
    console.log(values);
    //console.log("Name:", values.name);
  };

  const setFormValue = () => {
    setValue('name', 'John Doe', {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onError = (errors: any) => {
    console.log(errors);
  };

  return (
    <div className="form-page">
      <form className="hook-form" onSubmit={handleSubmit(onSubmit, onError)}>
        <h2>User Details</h2>

        <div className="form-section">
          <h3 className="form-section-title">Personal Information</h3>

          <div className="field-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              {...register('name', {
                disabled: false,
                required: 'Name is required',
              })}
            />
            {errors.name && <span className="error">{errors.name.message}</span>}
          </div>

          <p>{watchForm}</p>
          {/* <p>JSON: {JSON.stringify(watchForm)}</p> */}

          <div className="field-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register('email', {
                disabled: watch('name') === '',
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
                },
              })}
            />
            {errors.email && <span className="error">{errors.email.message}</span>}
          </div>

          <div className="field-group-row">
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
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                placeholder="Date of Birth"
                {...register('dob', {
                  valueAsDate: true,
                })}
              />
            </div>
          </div>

          <div className="field-group-row">
            <div className="field-group">
              <label htmlFor="country">Country</label>
              <select id="country" {...register('country')}>
                <option value="">Select a country</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
              </select>
            </div>

            <div className="field-group">
              <label>Gender</label>
              <div className="radio-group">
                <div className="radio-item">
                  <input type="radio" id="male" value="male" {...register('gender')} />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="radio-item">
                  <input type="radio" id="female" value="female" {...register('gender')} />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3 className="form-section-title">Skills</h3>

          <div className="checkbox-group">
            <div className="checkbox-item">
              <input type="checkbox" id="grpc" value="grpc" {...register('skills')} />
              <label htmlFor="grpc">gRPC</label>
            </div>

            <div className="checkbox-item">
              <input type="checkbox" id="go" value="go" {...register('skills')} />
              <label htmlFor="go">Go</label>
            </div>

            <div className="checkbox-item">
              <input type="checkbox" id="python" value="python" {...register('skills')} />
              <label htmlFor="python">Python</label>
            </div>
          </div>
          {errors.skills && <span className="error">{errors.skills.message}</span>}
        </div>

        <div className="form-section">
          <h3 className="form-section-title">Contact Information</h3>

          <div className="field-group-row">
            <div className="field-group">
              <label htmlFor="primary-phoneno">Primary Phone</label>
              <input
                type="text"
                id="primary-phoneno"
                placeholder="Enter primary phone .."
                {...register('phonenumber.0')}
              />
            </div>

            <div className="field-group">
              <label htmlFor="secondary-phoneno">Secondary Phone</label>
              <input
                type="text"
                id="secondary-phoneno"
                placeholder="Enter secondary phone .."
                {...register('phonenumber.1')}
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3 className="form-section-title">Social Media</h3>

          <div className="field-group">
            <label htmlFor="facebook">Facebook</label>
            <input
              type="text"
              id="facebook"
              placeholder="Enter your Facebook name .."
              {...register('social.facebook')}
            />
            {errors.social?.facebook && (
              <span className="error">{errors.social.facebook.message}</span>
            )}
          </div>

          <div className="field-group">
            <label htmlFor="twitter">Twitter</label>
            <input
              type="text"
              id="twitter"
              placeholder="Enter your Twitter name .."
              {...register('social.twitter')}
            />
            {errors.social?.twitter && (
              <span className="error">{errors.social.twitter.message}</span>
            )}
          </div>
        </div>

        {/* <button type="submit" disabled={!isValid}> */}
        <button type="submit">
          Submit
        </button>
        <button type="button" onClick={() => reset()}>
          Reset
        </button>
        <button type="button" onClick={getFormValues}>
          Get Form Values
        </button>
        <button type="button" onClick={setFormValue}>
          Set Form Value
        </button>
      </form>
      <DevTool control={control} placement="top-right" />
    </div>
  );
}

export default Reacthookform;
