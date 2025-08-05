import React from 'react'

const Buttons = ({text,className,img,imgClassName}) => {
  return (
<button className={`bg-[#EA580C] text-[16px] font-REM font-medium text-white ${className}`}> <img src={img} className={imgClassName} />
{text}
    
</button>
  )
}

export default Buttons