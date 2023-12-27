import classNames from 'classnames/bind';
import style from './SideBar.module.scss';

const cx = classNames.bind(style);

function SideBar() {
    return (
        <div className={cx('wrapper')}>
            <h1>SideBar</h1>
        </div>
    );
}

export default SideBar;
