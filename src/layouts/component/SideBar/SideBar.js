import Menu, { MenuItem } from './Menu';
import classNames from 'classnames/bind';
import style from './SideBar.module.scss';
import config from '~/config';
import {
    HomeIcon,
    HomeActiveIcon,
    FriendsIcon,
    FriendsActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/component/Icons';

const cx = classNames.bind(style);

function SideBar() {
    return (
        <div className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="Dành cho bạn"
                    to={config.linkTo.home}
                    icon={<HomeIcon />}
                    iconAction={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.linkTo.following}
                    icon={<FriendsIcon />}
                    iconAction={<FriendsActiveIcon />}
                />
                <MenuItem
                    title="Live"
                    to={config.linkTo.live}
                    icon={<LiveIcon />}
                    iconAction={<LiveActiveIcon />}
                />
            </Menu>
        </div>
    );
}

export default SideBar;
