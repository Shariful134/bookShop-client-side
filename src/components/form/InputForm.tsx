import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

type InputProps = {
  label: string;
  type?: string;
  id?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const InputForm = ({ label, type, placeholder, onChange, id }: InputProps) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        // value={value}
      />
    </div>
  );
};

export default InputForm;
