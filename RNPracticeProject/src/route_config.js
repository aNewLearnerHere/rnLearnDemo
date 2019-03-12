var routeConfig = {};

import _Index from './pages/Index';
import _List from './pages/List';
import _selfDefine_selfDefine from './pages/selfDefine/selfDefine';

routeConfig['/Index'] = _Index;
routeConfig['/List'] = _List;
routeConfig['/selfDefine/selfDefine'] = _selfDefine_selfDefine;

export default routeConfig;