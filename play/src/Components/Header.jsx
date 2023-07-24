import React from 'react'

const Header = () => {
  return (
    <div className=' w-100   d-flex align-items-center ' style={{height:'300px'}}>
        <div className='Header mx-auto rounded d-flex w-75 justify-content-center' >
            <div className='w-50 h-100 text-start  p-5' >
                <h1>Get Premium free for 1 month</h1>
                <p>Only $9.99 month after. Cancel anytime</p>
                <div className='mt-3'>
                    <button>Get Started</button>
                    <button>View Plans</button>
                </div>
            </div>
            <div className='w-50  text-end pt-3 px-4'>
                <h1 className=''>Play Sound</h1>
            </div>
        </div>
    </div>
  )
}

export default Header