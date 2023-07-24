import LandingPage from '../pages/LandingPage';
import Home from '../pages/Home';
import Library from '../pages/Library';
import MusicVideo from '../pages/MusicVideo';
import Podcasts from '../pages/Podcasts';
import Radio from '../pages/Radio';
import LoinRegister from '../pages/NestedPages/LoinRegister';



const routes = [
    { path:'/' , element:<LandingPage />},
    { path:'/home' , element:<Home />},
    { path:'/library' , element:<Library />},
    { path:'/musicvideo' , element:<MusicVideo />},
    { path:'/podcasts' , element:<Podcasts />},
    { path:'/radio' , element:<Radio />},
    { path:'/loginregister' , element:<LoinRegister /> , child: [
        { path:'/loginregister/login' , element:<Login />},
        { path:'/loginregister/register' , element:<Register />},
    ]},
]