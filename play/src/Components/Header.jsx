import React from 'react'

const Header = () => {
  return (
    <div className=' w-100   d-flex align-items-center ' style={{height:'300px'}}>
        <div className='Header mx-auto rounded d-flex w-75 justify-content-center' >
            <div className='w-75 h-100 text-start  p-5' >
                <h1 className='p-2'>Get Premium free for 1 month</h1>
                <p className='p-2'>Only $9.99 month after. Cancel anytime</p>
                <div className='w-50 mt-3 p-2 d-flex justify-content-between'>
                    <button className='w-50 p-1 mx-1 rounded-1 btn-outline-light btn'>Get Started</button>
                    <button className='w-50 p-1 mx-1 rounded-1 bg-primary text-light'>View Plans</button>
                </div>
            </div>
            <div className='w-25  text-end pt-3 px-4'>
                <h1 className=''>Play Sound</h1>
            </div>
        </div>
    </div>
  )
}

export default Header