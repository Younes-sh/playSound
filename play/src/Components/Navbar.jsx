import { Link , NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='d-flex flex-column  p-5'>
      <div className='Nav d-flex flex-column text-start py-5 '>
        <NavLink className='text-decoration-none py-1' to='/home'>Home</NavLink>
        <NavLink className='text-decoration-none py-1' to='/library'>Library</NavLink>
        <NavLink className='text-decoration-none py-1' to='/musicvideo'>Music Video</NavLink>
        <NavLink className='text-decoration-none py-1' to='/podcasts'>Podcasts</NavLink>
        <NavLink className='text-decoration-none py-1' to='/radio'>Radio</NavLink>
      </div>

      <div className=' d-flex flex-column text-start py-5 '>
        <NavLink className='text-decoration-none py-1'>Recently Played</NavLink>
        <NavLink className='text-decoration-none py-1'>Favorite Song</NavLink>
        <NavLink className='text-decoration-none py-1'>Album</NavLink>
        <NavLink className='text-decoration-none py-1'>Artist</NavLink>
      </div>

      <div className=' d-flex flex-column text-start py-5 '>
        <NavLink className='text-decoration-none py-1'>My Favorite Song</NavLink>
        <NavLink className='text-decoration-none py-1'>Music of Summer</NavLink>
        <NavLink className='text-decoration-none py-1'>Today's Top Hits</NavLink>
      </div>
    </div>
  )
}

export default Navbar