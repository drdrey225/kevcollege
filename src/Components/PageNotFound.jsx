import React from 'react'

const PageNotFound = () => {
  return (
    <>
      <div className='border md:w-1/2 mx-auto text-center py-28 shadow-sm rounded-lg'>
         <h1 className='font-bold text-4xl mb-6'>Oops!</h1>
         <p className='font-semibold mb-8'>Sorry an Unexpected error has occurred</p>
         <i> Page Not Found</i>
      </div>
    </>
  )
}

export default PageNotFound