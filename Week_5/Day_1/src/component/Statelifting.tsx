
import { useState } from 'react';


interface InputProps {
  value: string;
  onChange: (value: string) => void;
}

const NameInput = ({ value, onChange }: InputProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter your name"
    />
  );
};


interface DisplayProps {
  value: string;
}

const NameDisplay = ({ value }: DisplayProps) => {
  return <p>Hello, {value || 'stranger'}!</p>;
};


export const StateLifting = () => {
  const [name, setName] = useState<string>('');

  return (
    <div>
      <NameInput value={name} onChange={setName} />
      <NameDisplay value={name} />
    </div>
  );
};