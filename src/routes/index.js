// Layout
import MLogin from '../modules/Auth/components/Login/index';
import LoginLayout from '../common/components/layout/LoginLayout';
import Degree from '../modules/Home/Degree';
import Certificate from '../modules/Home/Certificate';
import Finance from '../modules/Home/Finance';
import Asset from '../modules/Home/Asset';


const publicRoutes = [
    {
        path: '/login',
        component: MLogin,
        layout: LoginLayout,
    },
    {
        path: '/',
        component: Degree,
    },
    {
        path: '/degree',
        component: Degree,
    },
    {
        path: '/certificate',
        component: Certificate
    },
    {
        path: '/finance',
        component: Finance,
    },
    {
      path: '/asset',
      component: Asset,
    }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }
