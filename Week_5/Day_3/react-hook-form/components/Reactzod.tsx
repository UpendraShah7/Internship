import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DevTool } from '@hookform/devtools';
import { schema } from './schema';
import type { z } from 'zod';

type FormInput = z.input<typeof schema>;
type FormValues = z.output<typeof schema>;
    
function Reacthookform() {
  const { register, control, handleSubmit, watch, getValues, setValue, formState, reset } = useForm< FormInput, any, FormValues >({
    resolver: zodResolver(schema),
    defaultValues: {
      name: 'Ups',
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

  const { errors, isSubmitting } = formState;

  const onSubmit = (data: FormValues) => {
    console.log(data);
     reset();
  };

  const watchForm = watch('name');

  const getFormValues = () => {
    console.log(getValues());
  };

  const setFormValue = () => {
    setValue('name', 'John Doe', {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  return (
    <div className="form-page">
      <form className="hook-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>User Details</h2>

        <div className="form-section">
          <h3 className="form-section-title">Personal Information</h3>

          <div className="field-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" {...register('name')} />
            {errors.name && <span className="error">{errors.name.message}</span>}
          </div>

          <p>{watchForm}</p>

          <div className="field-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" {...register('email')} />
            {errors.email && <span className="error">{errors.email.message}</span>}
          </div>

          <div className="field-group-row">
            <div className="field-group">
              <label htmlFor="age">Age</label> 
              <input
                type="number"
                id="age"
                placeholder="Enter your age"
                {...register('age', { valueAsNumber: true })}
              />
              {errors.age && <span className="error">{errors.age.message}</span>}
            </div>

            <div className="field-group">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                placeholder="Date of Birth"
                {...register('dob', { valueAsDate: true })}
              />
              {errors.dob && <span className="error">{errors.dob.message}</span>}
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

        <button type="submit" disabled={isSubmitting}>
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
