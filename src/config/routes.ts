import IRoute from '../interfaces/route'
import HomePage from '../pages/Home'
import NetworkService from '../pages/NetworkService'
import CacheService from '../pages/CacheService'
import LocalDataService from '../pages/LocalDataService'
import ThreadPoolService from '../pages/ThreadPoolService'



const routes: IRoute[] = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
        exact: true
    },
    {
        path: '/network/',
        name: 'NetworkService',
        component: NetworkService,
        exact: true
    },
    {
        path: '/network/:number',
        name: 'NetworkService',
        component: NetworkService,
        exact: true
    },
    {
        path: '/cache',
        name: 'CacheService',
        component: CacheService,
        exact: true
    },
    {
        path: '/localdata',
        name: 'LocalDataService',
        component: LocalDataService,
        exact: true
    },
    {
        path: '/threadpool',
        name: 'ThreadPoolService',
        component:ThreadPoolService,
        exact: true
    }
]

export default routes;