"use client";

export default function Input({
  id,
  label,
  required,
  name,
  disabled,
  errors,
  register,
}) {
  return (
    <div className="w-full relative ">
      <input
        autoComplete="off"
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=""
        name={name}
        type="text"
        className={`        
        peer
        w-full
        pt-6
        px-7
        py-3
         bg-transparent 
        font-light
        border-b-2
        outline-none 
        rounded-md 
        transition 
        disabled:opacity-70
        disabled:cursor-not-allowed
        ${errors[id] ? "border-rose-400" : "border-b-black"}
        ${errors[id] ? "focus:border-rose-400" : "focus:border-b-slate-300"}
        `}
      />
      <label
        className={`absolute cursor-text text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:text-sm peer-focus:-translate-y-4
        ${errors[id] ? "text-rose-400" : "text-white"}
        `}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}
