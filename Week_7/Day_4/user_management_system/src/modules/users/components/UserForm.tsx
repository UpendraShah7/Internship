import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, Input, Radio, Checkbox, Select, Button, message } from 'antd';
import { getUserSchema } from '../schema/user.schema';
import { type User, type UserFormValues } from '../types/user.types';
import { useUsersStore } from '../store/users.store';

const SKILL_OPTIONS = ['React', 'Node.js', 'TypeScript', 'SQL'];
const COUNTRY_OPTIONS = ['Nepal', 'India', 'USA', 'UK', 'Australia'];

const defaultValues: UserFormValues = {
  fullName: '',
  email: '',
  password: '',
  gender: '',
  skills: [],
  country: '',
  agreedToTerms: false,
};

interface UserFormProps {
  editingUser?: User | null;
  onDone: () => void;
}

export function UserForm({ editingUser, onDone }: UserFormProps) {
  const isEditMode = !!editingUser;
  const addUser = useUsersStore((s) => s.addUser);
  const updateUser = useUsersStore((s) => s.updateUser);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UserFormValues>({
    resolver: zodResolver(getUserSchema(isEditMode)),
    defaultValues,
  });


  useEffect(() => {
    if (editingUser) {
      reset({
        fullName: editingUser.fullName,
        email: editingUser.email,
        password: '',
        gender: editingUser.gender,
        skills: editingUser.skills,
        country: editingUser.country,
        agreedToTerms: editingUser.agreedToTerms,
      });
    } else {
      reset(defaultValues);
    }
  }, [editingUser, reset]);

  const onSubmit = async (values: UserFormValues) => {
    try {
      const payload = {
        fullName: values.fullName,
        email: values.email,
        gender: values.gender as User['gender'],
        skills: values.skills,
        country: values.country,
        agreedToTerms: values.agreedToTerms,
      };

      if (isEditMode && editingUser) {
        updateUser(editingUser.id, payload);
        message.success('User updated successfully');
      } else {
        addUser(payload);
        message.success('User created successfully');
      }

      reset(defaultValues);
      onDone();
    } catch {
      message.error('Something went wrong');
    }
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
      <Form.Item
        label="Full Name"
        validateStatus={errors.fullName ? 'error' : ''}
        help={errors.fullName?.message}
      >
        <Controller
          name="fullName"
          control={control}
          render={({ field }) => <Input {...field} placeholder="Full name" />}
        />
      </Form.Item>

      <Form.Item
        label="Email Address"
        validateStatus={errors.email ? 'error' : ''}
        help={errors.email?.message}
      >
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input {...field} placeholder="email@example.com" />}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        validateStatus={errors.password ? 'error' : ''}
        help={
          errors.password?.message ||
          (isEditMode ? 'Password cannot be changed here' : undefined)
        }
      >
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input.Password {...field} disabled={isEditMode} placeholder="Password" />
          )}
        />
      </Form.Item>

      <Form.Item
        label="Gender"
        validateStatus={errors.gender ? 'error' : ''}
        help={errors.gender?.message}
      >
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <Radio.Group {...field}>
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
              <Radio value="Other">Other</Radio>
            </Radio.Group>
          )}
        />
      </Form.Item>

      <Form.Item
        label="Skills"
        validateStatus={errors.skills ? 'error' : ''}
        help={errors.skills?.message}
      >
        <Controller
          name="skills"
          control={control}
          render={({ field }) => <Checkbox.Group {...field} options={SKILL_OPTIONS} />}
        />
      </Form.Item>

      <Form.Item
        label="Country"
        validateStatus={errors.country ? 'error' : ''}
        help={errors.country?.message}
      >
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              placeholder="Select a country"
              options={COUNTRY_OPTIONS.map((c) => ({ value: c, label: c }))}
            />
          )}
        />
      </Form.Item>

      <Form.Item
        validateStatus={errors.agreedToTerms ? 'error' : ''}
        help={errors.agreedToTerms?.message}
      >
        <Controller
          name="agreedToTerms"
          control={control}
          render={({ field: { value, onChange, ...rest } }) => (
            <Checkbox checked={value} onChange={(e) => onChange(e.target.checked)} {...rest}>
              I accept the terms and conditions
            </Checkbox>
          )}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isSubmitting} disabled={isSubmitting}>
          {isEditMode ? 'Update User' : 'Create User'}
        </Button>
      </Form.Item>
    </Form>
  );
}