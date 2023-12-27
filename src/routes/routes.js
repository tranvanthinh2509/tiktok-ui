import config from '~/config';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
import { HeaderOnly } from '~/layouts';
import Live from '~/pages/Live';

const publicRouter = [
    { path: config.linkTo.home, component: Home },
    { path: config.linkTo.following, component: Following },
    { path: config.linkTo.profile, component: Profile },
    { path: config.linkTo.live, component: Live },
    // { path: '/@:nickname', component: Profile },
    { path: config.linkTo.search, component: Search, layout: null },
    { path: config.linkTo.upload, component: Upload, layout: HeaderOnly },
];

const privateRouter = [];

export { publicRouter, privateRouter };
