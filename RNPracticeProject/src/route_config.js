var routeConfig = {};

import _definePages_carDetail from './pages/definePages/carDetail';
import _Index from './pages/Index';
import _List from './pages/List';
import _verifyTestOne from './pages/verifyTestOne';
import _verifyTestTwo_verifyTestTwo from './pages/verifyTestTwo/verifyTestTwo';

routeConfig['/definePages/carDetail'] = _definePages_carDetail;
routeConfig['/Index'] = _Index;
routeConfig['/List'] = _List;
routeConfig['/verifyTestOne'] = _verifyTestOne;
routeConfig['/verifyTestTwo/verifyTestTwo'] = _verifyTestTwo_verifyTestTwo;

export default routeConfig;