import React, { useState } from 'react';

const Input = ({ type, name, value, onChange, placeholder }) => {
    const [active, setActive] = useState(false)
  return (
 <div className='w-full grid gap-1'>
<label className={`uppercase font-semibold ${active?"block":"hidden"}`}>{name}</label>
<input
 type={type}
 name={name}
 value={value}
 onChange={onChange}
 onClick={()=>setActive(true)}
 placeholder={placeholder}
 className="border-b-2 outline-none focus:border-green-200 px-4 p-1 rounded-md "
/>
 </div>
  );
};

export default Input;
