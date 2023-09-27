'use client';
import { ComponentProps, ElementType } from 'react';
import { Controller, FieldError, useFormContext } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { AlertCircle } from 'lucide-react';

type FormInputProps = ComponentProps<'input'> & {
  id?: string;
  name: string;
  label?: string;
  error?: FieldError;
  icon?: ElementType;
};

export function FormCpfInput({
  id,
  name,
  label,
  error,
  placeholder,
  disabled = false,
  readOnly = false,
  onChange,
  onBlur,
  ...rest
}: FormInputProps) {
  const { control } = useFormContext();

  return (
    <>
      <div
        data-error={!!error}
        data-readonly={readOnly}
        className="h-[3.75rem] px-2 py-2 flex flex-col rounded-md border transition duration-200 border-slate-300 hover:border-primary-400 focus-within:border-primary-400 focus-within:ring-2 focus-within:ring-primary-200 data-[readonly=true]:border-slate-300 data-[readonly=true]:bg-slate-100 data-[readonly=true]:focus-within:border-slate-400 data-[readonly=true]:focus-within:ring-slate-200 data-[disabled=true]:border-slate-300 data-[disabled=true]:bg-slate-100 data-[error=true]:border-red-400 focus-within:data-[error=true]:ring-red-200"
      >
        {label && (
          <label
            htmlFor={id || name}
            className="block text-sm leading-none font-medium text-slate-400"
          >
            {label}
          </label>
        )}

        <div className="flex items-center w-full">
          <Controller
            name={name}
            control={control}
            render={({
              field: { onChange: inputOnChange, onBlur: inputOnBlur, ...field },
            }) => (
              <InputMask
                value={field.value}
                mask="999.999.999-99"
                maskChar={null}
                className="w-full text-md lg:text-lg font-medium bg-transparent flex-1 focus:outline-none text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
                onChange={(evt) => {
                  if (onChange) {
                    onChange(evt);
                  }
                  inputOnChange(evt);
                }}
                onBlur={(evt) => {
                  if (onBlur) {
                    onBlur(evt);
                  }
                  inputOnBlur();
                }}
              />
            )}
          />
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
