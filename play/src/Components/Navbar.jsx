import { Link , NavLink } from 'react-router-dom';
import SvgIcon from '@mui/material/SvgIcon';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import CellTowerOutlinedIcon from '@mui/icons-material/CellTowerOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import BlurOnOutlinedIcon from '@mui/icons-material/BlurOnOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import AudiotrackOutlinedIcon from '@mui/icons-material/AudiotrackOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Navbar = () => {
  return (
    <div className='d-flex flex-column  p-5'>
      <div className='Nav d-flex flex-column text-start py-5 '>
      <div className='d-flex align-item-center border rounded-5 p-1 mb-1'>
        <HomeIcon color="warning" className='border-end bg-light  rounded-5'/>Menu
      </div>
        <NavLink className='text-decoration-none py-1 d-flex align-items-center' to='/discover'><BlurOnOutlinedIcon />Discover</NavLink>
        <NavLink className='text-decoration-none py-1 d-flex align-items-center' to='/library'><AppsOutlinedIcon />Library</NavLink>
        <NavLink className='text-decoration-none py-1 d-flex align-items-center' to='/musicvideo'><PlayCircleOutlineOutlinedIcon />Music Video</NavLink>
        <NavLink className='text-decoration-none py-1 d-flex align-items-center' to='/podcasts'><MicOutlinedIcon />Podcasts</NavLink>
        <NavLink className='text-decoration-none py-1 d-flex align-items-center' to='/radio'><CellTowerOutlinedIcon />Radio</NavLink>
      </div>

      <div className ='d-flex flex-column text-start py-5 '>
        <div className='d-flex align-item-center border rounded-5 p-1 mb-1'>
          <AppsOutlinedIcon  color="warning" className='border-end bg-light  rounded-5' /> Library
        </div>
        <NavLink className='text-decoration-none py-1 d-flex align-items-center'><HeadphonesOutlinedIcon/>Recently Played</NavLink>
        <NavLink className='text-decoration-none py-1 d-flex align-items-center'><FavoriteBorderOutlinedIcon/>Favorite Song</NavLink>
        <NavLink className='text-decoration-none py-1 d-flex align-items-center'><BallotOutlinedIcon />Album</NavLink>
        <NavLink className='text-decoration-none py-1 d-flex align-items-center'><RecordVoiceOverOutlinedIcon/>Artist</NavLink>
      </div>

      <div className ='d-flex flex-column text-start py-5 '>
        <div className='d-flex align-item-center border rounded-5 p-1 mb-1'>
          <LibraryMusicIcon color="warning" className='border-end bg-light  rounded-5'/>Playlist
        </div>
        <NavLink className='text-decoration-none py-1 d-flex align-items-center'><FavoriteBorderOutlinedIcon/>My Favorite Song</NavLink>
        <NavLink className='text-decoration-none py-1 d-flex align-items-center'><AudiotrackOutlinedIcon/>Music of Summer</NavLink>
        <NavLink className='text-decoration-none py-1 d-flex align-items-center'><MilitaryTechOutlinedIcon/>Today's Top Hits</NavLink>
      </div>
    </div>
  )
}

export default Navbar