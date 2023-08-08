'use-client'
import React from 'react'
import style from "./css/page.module.css"

const page = () => {
  const fahad ={
    color:'red'
  }
  
  return (
    <div>
      <h1 className='text-color'>fahad afridi</h1>
      <h1 className={style.textColor}>fahad afridi</h1>
      <h1 style={{color:'green'}}>airin</h1>
     
          <img src=".../" alt="" />
    </div>
  )
}

export default page