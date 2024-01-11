import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
const Navbar = () => {
    const [bar,setBar] = useState(false);
    const handleBar = () => {
        setBar(!bar)
    }
  return (
    <div className='flex flex-wrap justify-between p-4 shadow-md'>
      <div className='text-2xl mx-auto'>
        <Link to={'/'}>
        Logo
        
        </Link>
        </div>



      
      <ul className='hidden sm:inline-flex gap-4 mx-auto'>
        <li className=''><Link to={'/tutorial'} className='navbar-li'>Tutorial</Link></li>

        <li className=''><Link to={'/components'} className='navbar-li'>Components</Link></li>
        <li className=''><Link to={'/forums'} className='navbar-li'>Forums</Link></li>
        <li className=''><Link to={'/abouts'} className='navbar-li'>About</Link></li>
      </ul>
      <button className='sm:hidden'onClick={handleBar}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>
</button>
      {bar && <div className='flex inline-block mb-2 bg-zinc-200 border p-4 absolute shadow-md w-full'>
        <ul className=''>
          <button className='absolute top-2 right-4'onClick={handleBar}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg></button>
      <li className=''><Link to={'/tutorial'} className='navbar-li'>Tutorial</Link></li>

<li className=''><Link to={'/components'} className='navbar-li'>Components</Link></li>
<li className=''><Link to={''} className='navbar-li'>Forums</Link></li>
<li className=''><Link to={''} className='navbar-li'>About</Link></li>
</ul>
        </div>}
    </div>
  )
}

export default Navbar
