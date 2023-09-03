import React from 'react'

export const Wrapper = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='grid place-items-center'>{children}</div>
  )
}
