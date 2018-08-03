import Users from './containers/Users';
import Pizza from './containers/Pizza';
import TableComp from './components/TableComponent/TableComp';
import {RouteComponent} from './components/RoutesComponents/RouteComponent';
import Posts from './components/FormComponent/Posts';

const prefixRoute = "";
export const routes = [
    { path: getRoutesWithPrefix("/"), component: Users },
    { path:getRoutesWithPrefix("/pizza"), component: Pizza },
    { path :getRoutesWithPrefix("/table"), component: TableComp},
    { path:getRoutesWithPrefix('/checkRoute'), component:RouteComponent},
    {path:getRoutesWithPrefix('/posts'),component:Posts}
]; 

function getRoutesWithPrefix(routesObj){

    return prefixRoute+routesObj;
}

export default routes;