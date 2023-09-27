import { ComponentProps } from 'react';

type CheckBoxProps = ComponentProps<'input'> & {
  id?: string;
  name: string;
  label?: string;
};

export function FormCheckbox({
  label,
  id,
  name,
  onChange,
  onClick,
  ...rest
}: CheckBoxProps) {
  return (
    <div className="flex items-center h-[3.75rem] gap-3">
      <label
        className="relative flex cursor-pointer items-center rounded-full"
        htmlFor={id || name}
        data-ripple-dark="true"
      >
        <input
          id={id || name}
          name={name}
          type="checkbox"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-slate-300 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary-500 checked:bg-primary-500 checked:before:bg-primary-500 hover:before:opacity-10"
          onChange={(evt) => {
            if (onChange) {
              onChange(evt);
            }
          }}
          onClick={(evt) => {
            if (onClick) {
              onClick(evt);
            }
          }}
        />
        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </label>
      {label && (
        <label
          className="mt-px cursor-pointer select-none font-semibold text-slate-700"
          htmlFor={id || name}
        >
          {label}
        </label>
      )}
    </div>
  );
}
