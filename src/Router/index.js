import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
import { HeaderOnly } from '~/component/Layout';
import linkTo from '~/config/routes';

const publicRouter = [
    { path: linkTo.home, component: Home },
    { path: linkTo.following, component: Following },
    { path: linkTo.profile, component: Profile },
    // { path: '/@:nickname', component: Profile },
    { path: linkTo.search, component: Search, layout: null },
    { path: linkTo.upload, component: Upload, layout: HeaderOnly },
];

const privateRouter = [];

export { publicRouter, privateRouter };
