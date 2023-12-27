import { ComponentProps } from "react";

function Input({ ...props }: ComponentProps<"input">) {
  return <input {...props} />;
}

export default Input;
