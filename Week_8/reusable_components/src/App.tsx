import { useForm, FormProvider } from "react-hook-form";
import {
  FormTextField,
  FormPasswordField,
  FormNumberField,
  FormAmountField,
  FormRateField,
  FormSelect,
  FormDatePicker,
  FormCheckbox,
  FormRadioGroup,
  FormTextarea,
  FormMaskedField,
} from "./shared/components/form";

interface FormData {
  name: string;
  password: string;
  age: number;
  price: number;
  discount: number;
  category: string;
  date: string;
  active: boolean;
  gender: string;
  notes: string;
  phone: string;
}

function App() {
  const methods = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormTextField name="name" label="Name" />
        <FormPasswordField name="password" label="Password" />
        <FormNumberField name="age" label="Age" />
        <FormAmountField name="price" label="Price" />
        <FormRateField name="discount" label="Discount" />
        <FormSelect
          name="category"
          label="Category"
          options={[
            { label: "Shoes", value: "shoes" },
            { label: "Bags", value: "bags" },
          ]}
        />
        <FormDatePicker name="date" label="Date" />
        <FormCheckbox name="active" label="Active" />
        <FormRadioGroup
          name="gender"
          label="Gender"
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
        />
        <FormTextarea name="notes" label="Notes" />
        <FormMaskedField name="phone" label="Phone" mask="(###) ###-####" />

        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
}

export default App;