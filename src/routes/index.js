import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import LoginRoutes from './LoginRoutes';
import AllRoutes from './allRoutes';
import config from 'config';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes(AllRoutes, config.basename);
}
