import React from 'react'
import { Link } from 'react-router-dom'

const VerifyFooter = () => {
  return (
    <section className='py-12 '>
        <div className='w-full max-w-screen-xl px-5 mx-auto flex items-center justify-between'>
           <Link className='block font-medium text-base leading-6 text-#AAAAAA '  to="/privacy_policy">Privacy Policy</Link>
           <Link className='block font-medium text-base leading-6 text-#AAAAAA '  to="/privacy_policy">Copyright 2022</Link>
        </div>
    </section>
  )
}

export default VerifyFooter