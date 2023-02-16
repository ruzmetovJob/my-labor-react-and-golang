import { SetStateAction, useState } from "react";

export default function useInput(defaultValue:string) {
    const [value, setValue] = useState(defaultValue);
    function onChange(e: { target: { value: SetStateAction<string> } }) {
      setValue(e.target.value);
    }
    return {
      value,
      onChange,
    };
}