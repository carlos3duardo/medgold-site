'use client';
import { ComponentProps, ElementType } from 'react';
import { FieldError, useFormContext } from 'react-hook-form';
import { AlertCircle } from 'lucide-react';

type OptionProps = {
  value: string;
  label: string;
};

type SelectProps = ComponentProps<'input'> & {
  id?: string;
  name: string;
  placeholder?: string;
  label?: string;
  error?: FieldError;
  icon?: ElementType;
  options?: OptionProps[];
};

export function FormSelect({
  id,
  name,
  label,
  error,
  placeholder,
  disabled = false,
  readOnly = false,
  options,
  ...rest
}: SelectProps) {
  const { register } = useFormContext();

  return (
    <>
      <div
        data-error={!!error}
        data-readonly={readOnly}
        className="h-[3.75rem] pl-1 pr-2 py-2 flex flex-col rounded-md border transition duration-200 border-slate-300 hover:border-primary-400 focus-within:border-primary-400 focus-within:ring-2 focus-within:ring-primary-200 data-[readonly=true]:border-slate-300 data-[readonly=true]:bg-slate-100 data-[readonly=true]:focus-within:border-slate-400 data-[readonly=true]:focus-within:ring-slate-200 data-[disabled=true]:border-slate-300 data-[disabled=true]:bg-slate-100 data-[error=true]:border-red-400 focus-within:data-[error=true]:ring-red-200"
      >
        {label && (
          <label
            htmlFor={id || name}
            className="block px-1 text-sm leading-none font-medium text-slate-400"
          >
            {label}
          </label>
        )}

        <div className="flex items-center w-full">
          <select
            {...register(name)}
            id={id || name}
            className="w-full text-md lg:text-lg font-medium bg-transparent flex-1 focus:outline-none text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed data-[uppercase=true]:uppercase data-[lowercase=true]:lowercase"
          >
            {placeholder && <option value="">{placeholder}</option>}
            {options?.map((opt) => {
              return (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      {error && (
        <div className="flex items-center gap-1 mt-1 pl-1 text-red-400 text-xs font-medium">
          <AlertCircle size={14} />
          {error.message}
        </div>
      )}
    </>
  );
}
