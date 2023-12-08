import config from '~/config/config';

//Layouts
import { HeaderOnly } from '~/layouts/layouts';

//Pages
import Home from '~/pages/Home/Home';
import Following from '~/pages/Following/Following';
import Profile from '~/pages/Profile/Profile';
import Upload from '~/pages/Upload/Upload';
import Search from '~/pages/Search/Search';
import Live from '~/pages/Live/Live';
import Discover from '~/pages/Discover/Discover';

//Public Route
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: null },
  { path: config.routes.live, component: Live },
  { path: config.routes.discover, component: Discover },

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
