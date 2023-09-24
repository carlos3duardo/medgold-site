'use client';
import { FieldError, useFormContext } from 'react-hook-form';
import { AlertCircle } from 'lucide-react';
import { ComponentProps, ElementType, FC } from 'react';

type FormInputProps = ComponentProps<'input'> & {
  id?: string;
  name: string;
  label?: string;
  error?: FieldError;
  uppercase?: boolean;
  lowercase?: boolean;
  icon?: ElementType;
};

export const FormTextInput: FC<FormInputProps> = ({
  id,
  name,
  label,
  error,
  uppercase = false,
  lowercase = false,
  placeholder,
  disabled = false,
  readOnly = false,
  ...rest
}) => {
  const { register } = useFormContext();

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
          <input
            {...register(name)}
            type="text"
            id={id || name}
            data-uppercase={uppercase}
            data-lowercase={lowercase}
            data-disabled={disabled}
            data-readonly={readOnly}
            data-error={!!error}
            className="w-full text-md lg:text-lg font-medium bg-transparent flex-1 focus:outline-none text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed data-[uppercase=true]:uppercase data-[lowercase=true]:lowercase"
            placeholder={placeholder}
            readOnly={readOnly}
            {...rest}
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
};

// export function FormTextInput({
//   id,
//   name,
//   label,
//   error,
//   uppercase = false,
//   lowercase = false,
//   placeholder,
//   disabled = false,
//   readOnly = false,
//   ...rest
// }: FormInputProps) {
//   const { register } = useFormContext();

//   console.log({ error });

//   return (
//     <>
//       <div
//         data-error={!!error}
//         className="h-[3.75rem] px-2 py-2 flex flex-col rounded border transition duration-200 border-slate-300 hover:border-primary-400 focus-within:border-primary-400 focus-within:ring-2 focus-within:ring-primary-200 data-[readonly=true]:border-slate-300 data-[readonly=true]:bg-slate-100 data-[readonly=true]:focus-within:border-slate-400 data-[readonly=true]:focus-within:ring-slate-200 data-[disabled=true]:border-slate-300 data-[disabled=true]:bg-slate-100 data-[error=true]:border-red-400 focus-within:data-[error=true]:ring-red-200"
//       >
//         {label && (
//           <label
//             htmlFor={id || name}
//             className="block text-sm leading-none font-medium text-slate-400"
//           >
//             {label}
//           </label>
//         )}

//         <div className="flex items-center w-full">
//           <input
//             type="text"
//             id={id || name}
//             data-uppercase={uppercase}
//             data-lowercase={lowercase}
//             data-disabled={disabled}
//             data-readonly={readOnly}
//             data-error={!!error}
//             className="w-full text-md lg:text-lg font-medium bg-transparent flex-1 focus:outline-none text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed data-[uppercase=true]:uppercase data-[lowercase=true]:lowercase"
//             placeholder={placeholder}
//             {...rest}
//             {...register(name)}
//           />
//         </div>
//       </div>
//       {error && (
//         <div className="flex items-center gap-1 mt-1 pl-1 text-red-400 text-xs font-medium">
//           <AlertCircle size={14} />
//           {error.message}z
//         </div>
//       )}
//     </>
//   );
// }
