import LandingPage from '../pages/LandingPage';
import Discover from '../pages/Discover';
import Library from '../pages/Library';
import MusicVideo from '../pages/MusicVideo';
import Podcasts from '../pages/Podcasts';
import Radio from '../pages/Radio';
import LoinRegister from '../pages/NestedPages/LoinRegister';
import Login from '../pages/loginRegister/Login';
import Register from '../pages/loginRegister/Register';


const routes = [
    { path:'/' , element:<LandingPage />},
    { path:'/discover' , element:<Discover />},
    { path:'/library' , element:<Library />},
    { path:'/musicvideo' , element:<MusicVideo />},
    { path:'/podcasts' , element:<Podcasts />},
    { path:'/radio' , element:<Radio />},
    { path:'/loginregister' , element:<LoinRegister /> , child: [
        { path:'/loginregister/login' , element:<Login />},
        { path:'/loginregister/register' , element:<Register />},
    ]},
]

export default routes;