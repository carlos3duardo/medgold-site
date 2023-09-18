interface FormInputProps {
  id?: string;
  name: string;
  label: string;
}

export function FormInput({ id, name, label }: FormInputProps) {
  return (
    <div className="h-[3.75rem] px-2 py-2 flex flex-col rounded border transition duration-200 border-slate-300 hover:border-primary-400 focus-within:border-primary-400 focus-within:ring-2 focus-within:ring-primary-200 data-[readonly=true]:border-slate-300 data-[readonly=true]:bg-slate-100 data-[readonly=true]:focus-within:border-slate-400 data-[readonly=true]:focus-within:ring-slate-200 data-[disabled=true]:border-slate-300 data-[disabled=true]:bg-slate-100 data-[error=true]:border-red-400 focus-within:data-[error=true]:ring-red-200">
      <label
        htmlFor={id || name}
        className="block text-sm leading-none font-medium text-slate-400"
      >
        {label}
      </label>
      <div className="flex items-center w-full">
        <input
          type="text"
          name={name}
          id={id || name}
          className="w-full text-md lg:text-lg font-medium bg-transparent flex-1 focus:outline-none text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>
    </div>
  );
}
