import { type UseFormRegisterReturn } from "react-hook-form";

interface IInput {
  label: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  style?: string;
  register?: UseFormRegisterReturn;
  type?: string;
  required?: boolean;
}
const InputComponent = ({
  label,
  style,
  onChange,
  register,
  type = "text",
  required = false,
  placeholder,
}: IInput) => {
  return (
    <div>
      <p className="text-xs pl-5 font-semibold font-sans">{label}</p>
      <input
        onChange={(e) => {
          register?.onChange?.(e);
          onChange?.(e.target.value);
        }}
        required={required}
        {...register}
        type={type}
        className={`${style} bg-white/35 py-2 px-5 rounded-xl outline-none`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputComponent;
