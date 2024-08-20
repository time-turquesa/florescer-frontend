import React from 'react';
import { FieldError } from 'react-hook-form';

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  register: any;
  name: string;
  error?: FieldError;
}

export const InputField = ({ label, type, placeholder, register, name, error }: InputFieldProps) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, { required: true })}
        className="w-full p-3 border rounded-lg"
      />
      {error && <span className="text-red-500">{error.message || `${label} é obrigatório`}</span>}
    </div>
  );
};

