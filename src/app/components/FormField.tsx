import React from "react";

export enum FormFieldType {
  TEXT = "text",
  TEXTAREA = "textarea",
}

interface Props {
  label: string;
  placeholder: string;
  type: FormFieldType;
  id: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
}

const FormField: React.FC<Props> = ({
  label,
  placeholder,
  type,
  id,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="px-2 text-sm md:text-xl" htmlFor={id}>
        {label}
      </label>
      {type === FormFieldType.TEXT && (
        <input
          id={id}
          className={`bg-peach w-full rounded shadow-lg p-2 lg:py-5 lg:px-5 text-sm md:text-xl ${
            error ? "border border-red-500" : ""
          }`}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      )}
      {type === FormFieldType.TEXTAREA && (
        <textarea
          id={id}
          className={`bg-peach w-full rounded shadow-lg p-2 lg:py-5 lg:px-5 text-sm md:text-xl ${
            error ? "border border-red-500" : ""
          }`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      )}
      {error && (
        <span id={`${id}-error`} className="text-red-500 text-xs md:text-sm">
          {error}
        </span>
      )}
    </div>
  );
};

export default FormField;
