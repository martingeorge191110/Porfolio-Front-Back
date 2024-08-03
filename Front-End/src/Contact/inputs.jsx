import React, { useRef } from "react";

export default function Input({ type, placeholder, value, onChange }) {
    const inputRef = useRef(null);

    return (
        <input
            ref={inputRef}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}