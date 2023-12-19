import Button from '~/component/Button';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';

const cx = classNames.bind(style);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', { separate: data.separate });
    return (
        <Button
            className={classes}
            leftIcon={data.icon}
            onClick={onClick}
            to={data.to}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;
