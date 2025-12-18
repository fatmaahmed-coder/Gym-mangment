import React from 'react'

export default function NavBar() {
  return (
    <>
      <nav className='navbar  fixed-top  px-5'>
        <ul className='d-flex align-items-center justify-content-between w-100 list-unstyled '
>
          <li>
            <i className="fas fa-dumbbell  " style={{ fontSize: '23px', color: '#000' }}></i>
          </li>

          <li>
            <img style={{
              width: "35px", height: "35px", borderRadius: "50%"
            }} src='../public/image/Starter pfp.jpg' />
          </li>

        </ul>
        <hr className='w-100' />

      </nav>

    </>
  )
}
